import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  // Hier kannst du Logik für das Verhalten der Buttons oder andere Interaktionen hinzufügen
}
