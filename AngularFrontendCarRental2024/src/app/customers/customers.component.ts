import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importiere RouterModule

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  standalone: true,
  imports: [RouterModule], // Füge RouterModule zu den Imports hinzu
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  // Hier kannst du Logik für das Verhalten der Buttons oder andere Interaktionen hinzufügen
}
