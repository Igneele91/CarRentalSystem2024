import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { RentalData, RentalConfirmation } from '../../models'; // Importieren Sie benötigte Modelle

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent {
  rentalData: RentalData; // Definieren Sie den Typ für rentalData

  constructor(private carService: CarService) { }

  onRent(): void {
    this.carService.rentCar(this.rentalData).subscribe(confirmation => {
      // Verarbeiten Sie die Bestätigung
      console.log(confirmation); // Beispiel: Loggen der Bestätigung
    });
  }
}
