import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  standalone: true,
  imports: [
    RouterLink
  ],
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  // Hier kannst du Logik für das Verhalten der Buttons oder andere Interaktionen hinzufügen
}
