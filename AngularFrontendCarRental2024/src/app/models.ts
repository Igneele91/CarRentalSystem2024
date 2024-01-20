export interface Car {
  id: number;
  make: string;
  model: string;
  // ... Weitere Eigenschaften
}

export interface SearchCriteria {
  make?: string;
  model?: string;
  // ... Weitere Suchkriterien
}

export interface RentalData {
  carId: number;
  startDate: Date;
  endDate: Date;
  // ... Weitere Mietdaten
}

export interface RentalConfirmation {
  confirmationNumber: string;
  // ... Weitere Bestätigungsdetails
}
