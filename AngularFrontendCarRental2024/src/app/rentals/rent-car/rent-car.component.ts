import { Component } from '@angular/core';
import { CarService } from '../../services/car.service';
import { RentalData, RentalConfirmation } from '../../models';


@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent {
  rentalData: RentalData | undefined = undefined;

  constructor(private carService: CarService) { }

  onRent(): void {
    if (this.rentalData) {
      this.carService.rentCar(this.rentalData).subscribe((confirmation: RentalConfirmation) => {
        // Verarbeite die Bestätigung
        console.log(confirmation);
      });
    } else {
      console.error('Mietdaten sind nicht definiert.');
    }
  }
}
