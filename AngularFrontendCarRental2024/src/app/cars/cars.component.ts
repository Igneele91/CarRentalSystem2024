import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  standalone: true,
  imports: [RouterModule], // Stelle sicher, dass RouterModule hier importiert wird
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  // Hier kann Logik für das Verhalten der Buttons oder andere Interaktionen hinzugefügt werden
}
