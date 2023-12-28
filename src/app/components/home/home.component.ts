import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

import axios from 'axios';
import { DateTime } from 'luxon';

const usuario = 'Kiridepapel';
const url = `https://api.github.com/users/${usuario}/events`;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  ngOnInit() {
    this.obtenerCommitsPorMes();
  }

  async obtenerCommitsPorMes() {
    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        const events = response.data;

        // Obtener año actual
        const currentYear = DateTime.local().year;

        // Calcular fechas de inicio y fin
        const startThisYear = DateTime.local(currentYear, 1, 1);
        const endThisYear = DateTime.local(currentYear, 12, 31);

        const startLastYear = DateTime.local(currentYear - 1, 1, 1);
        const endLastYear = DateTime.local(currentYear - 1, 12, 31);

        // Filtrar eventos Push
        const commitsThisYear = events.filter(
          (event: any) =>
            event.type === 'PushEvent' &&
            startThisYear <= DateTime.fromISO(event.created_at) &&
            DateTime.fromISO(event.created_at) <= endThisYear
        );

        const commitsLastYear = events.filter(
          (event: any) =>
            event.type === 'PushEvent' &&
            startLastYear <= DateTime.fromISO(event.created_at) &&
            DateTime.fromISO(event.created_at) <= endLastYear
        );

        // Contar commits
        const commitsThisYearCount = commitsThisYear.reduce(
          (total: number, event: any) => total + event.payload.size,
          0
        );

        const commitsLastYearCount = commitsLastYear.reduce(
          (total: number, event: any) => total + event.payload.size,
          0
        );

        // Calcular diferencia de porcentaje
        const percDiff =
          commitsLastYearCount === 0
            ? 100
            : ((commitsThisYearCount - commitsLastYearCount) / commitsLastYearCount) * 100;

        console.log(`Commits este año: ${commitsThisYearCount}`);
        console.log(`Commits año pasado: ${commitsLastYearCount}`);

        if (percDiff === 100) {
          console.log(`Diferencia porcentual: ${percDiff.toFixed(0)}%`);
        } else {
          console.log(`Diferencia porcentual: ${percDiff.toFixed(2)}%`);
        }
      } else {
        console.error(`Error: ${response.status}`);
      }
    } catch (error: any) {
      console.error(`Error: ${error.message}`);
    }
  }
}
