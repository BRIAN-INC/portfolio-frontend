import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialItemComponent } from './social-item.component';

describe('SocialItemComponent', () => {
  let component: SocialItemComponent;
  let fixture: ComponentFixture<SocialItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SocialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
