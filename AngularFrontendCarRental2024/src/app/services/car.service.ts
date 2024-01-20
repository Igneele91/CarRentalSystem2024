import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:8080/api';


  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchCars(criteria: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search`, { params: criteria });
  }

  rentCar(rentalData: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/rent`, rentalData);
  }
}
