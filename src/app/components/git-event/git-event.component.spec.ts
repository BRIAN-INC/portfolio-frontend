import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitEventComponent } from './git-event.component';

describe('GitEventComponent', () => {
  let component: GitEventComponent;
  let fixture: ComponentFixture<GitEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GitEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GitEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
