import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent {
  // Hier kannst du Logik für das Verhalten der Buttons oder andere Interaktionen hinzufügen
}
