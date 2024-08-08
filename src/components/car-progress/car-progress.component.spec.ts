import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProgressComponent } from './car-progress.component';

describe('CarProgressComponent', () => {
  let component: CarProgressComponent;
  let fixture: ComponentFixture<CarProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
