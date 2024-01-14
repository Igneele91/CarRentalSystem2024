import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importiere RouterModule

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  standalone: true,
  imports: [RouterModule], // Füge RouterModule zu den Imports hinzu
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent {
  // Hier kannst du Logik für das Verhalten der Buttons oder andere Interaktionen hinzufügen
}
