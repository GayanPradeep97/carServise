import { Component, OnInit } from '@angular/core';
import { CarService, Car } from '../../services/car.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.sass']
})
export class CarListComponent implements OnInit {
 
  carlist: Car[] = []; // Initialize as an empty array

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Subscribe to the cars observable and update the carlist property
    this.carService.getCars().subscribe(cars => {
      console.log('List of cars:', cars);
      this.carlist = cars; // Update the carlist array with the received cars
    });
  }
  }

