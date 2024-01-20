import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service'; // Stellen Sie sicher, dass der Pfad korrekt ist

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  cars: any[] = []; // Definieren Sie einen Typ für Ihre Autos, z.B. Car[] wenn Sie eine Car-Schnittstelle haben

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAllCars().subscribe(cars => {
      this.cars = cars; // Speichern Sie die Autos in der Komponente
    });
  }
}
