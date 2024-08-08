import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Car {
  model: string;
  licensePlate: string;
  serviceTime?: 'now' | 'after'; // Add this property
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private cars: Car[] = [];
  private carsSubject = new BehaviorSubject<Car[]>(this.cars);

  cars$ = this.carsSubject.asObservable();

  addCar(car: Car) {
    this.cars.push(car);
    this.carsSubject.next(this.cars); // Update the observable with the new array
  }

  getCars() {
    return this.cars$; // Provide an observable for subscribing to the car list
  }
}
