import { Component } from '@angular/core';
import { CarService, Car } from '../../services/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.sass']
})
export class CarAddComponent {
  model = '';
  licensePlate = '';
  serviceTime: 'now' | 'after' = 'now'; // Add this property

  constructor(private carService: CarService) {}

  addCar() {
    if (this.model && this.licensePlate) {
      const newCar: Car = {
        model: this.model,
        licensePlate: this.licensePlate,
        serviceTime: this.serviceTime // Include the selected service time
      };
      this.carService.addCar(newCar);
      this.model = '';
      this.licensePlate = '';
      this.serviceTime = 'now'; // Reset the select box to default
    }
  }
}
