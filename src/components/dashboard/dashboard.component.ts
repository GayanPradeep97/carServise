import { Component, OnInit } from '@angular/core';
import { Chart, DoughnutController, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {

  chart: Chart<'doughnut', number[]> | undefined;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    // Register the necessary components
    Chart.register(DoughnutController, ArcElement, Tooltip, Legend);

    this.carService.getCars().subscribe(cars => {
      const allCars = cars.length;
      const nowCars = cars.filter(car => car.serviceTime === 'now').length;
      const afterCars = cars.filter(car => car.serviceTime === 'after').length;

      this.createChart(allCars, nowCars, afterCars);
    });
  }

  createChart(allCars: number, nowCars: number, afterCars: number): void {
    this.chart = new Chart<'doughnut', number[]>('carChart', {
      type: 'doughnut',
      data: {
        labels: ['All Cars', 'Now Cars', 'After Cars'],
        datasets: [{
          data: [allCars, nowCars, afterCars],
          backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
          hoverBackgroundColor: ['#388E3C', '#FFB300', '#D32F2F']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem: { label: any; raw: any; }) {
                return `${tooltipItem.label}: ${tooltipItem.raw}`;
              }
            }
          }
        }
      } as ChartOptions<'doughnut'>
    });
  }
}
