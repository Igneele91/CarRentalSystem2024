# AngularFrontendCarRental2024

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.10.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

-----------------------------------

# CarRentalSystem2024 - Angular Frontend

## Projektstruktur

Das Angular-Frontend-Projekt für das "CarRentalSystem2024" ist strukturiert, um verschiedene Aspekte der Anwendung effizient zu verwalten. Hier ist eine detaillierte Beschreibung der Ordner und Dateien:

### Hauptordner und Dateien

- **src**: Hauptordner, der den Quellcode der Angular-Anwendung enthält.
  - **favicon.ico**: Favicon der Anwendung, das im Browser-Tab angezeigt wird.
  - **index.html**: Haupt-HTML-Datei und der Einstiegspunkt der Angular-Anwendung.
  - **main.ts**: Hauptdatei, die Angular verwendet, um die Anwendung zu starten.
  - **styles.css**: Globale Stylesheet-Datei für die gesamte Anwendung.

### Kern der Anwendung

- **app**: Kernordner der Anwendung mit Hauptkomponenten und Services.
  - **app.component.***: Definiert die Hauptkomponente der Anwendung (Layout und Struktur).
  - **app.config.ts**: Konfigurationsdatei mit Einstellungen für die Anwendung.
  - **app.module.ts**: Hauptmodul der Anwendung, das alle Komponenten, Services und weitere Module zusammenführt.
  - **app.routes.ts**: Definiert Routen für die Anwendung und ermöglicht die Navigation zwischen Komponenten.
  - **models.ts**: Enthält Modelle (Interfaces) zur Definition der Datenobjektstrukturen.

### Spezifische Komponenten und Services

- **cars**: Verwaltung von Autos.
  - **cars.component.***: Hauptkomponente für die Autos-Seite.
  - **car-list**: `car-list`-Komponente zur Anzeige der Autosliste.
    - **car-list.component.***: Definition der `car-list`-Komponente.
  - **car-search**: `car-search`-Komponente für das Suchen und Filtern von Autos.
    - **car-search.component.***: Definition der `car-search`-Komponente.

- **customers**: Komponente für die Kundenverwaltung.
  - **customers.component.***: Struktur und Verhalten der Kundenverwaltungsseite.

- **home**: Startseite der Anwendung.
  - **home.component.***: Definition der Startseite.

- **rentals**: Verwaltung von Autovermietungen.
  - **rentals.component.***: Hauptkomponente für die Vermietungen-Seite.
  - **rent-car**: `rent-car`-Komponente für den Mietvorgang.
    - **rent-car.component.***: Definition der `rent-car`-Komponente.

- **services**: Services für Backend-Interaktion und Datenbereitstellung.
  - **car.service.***: Service für HTTP-Anfragen bezüglich Autos.

### Statische Dateien

- **assets**: Ordner für statische Dateien wie Bilder oder Icons.
  - **.gitkeep**: Stellt sicher, dass der leere Ordner in das Git-Repository aufgenommen wird.

## Zusammenfassung

Die Struktur und die Dateien des Projekts wurden sorgfältig angelegt, um eine klare Trennung der verschiedenen Teile der Anwendung zu ermöglichen. Dies unterstützt die Wartbarkeit sowie die Skalierbarkeit des Projekts. Jede Komponente und jeder Service hat eine spezifische Rolle und trägt dazu bei, die Funktionalität der Anwendung auf eine organisierte Weise zu erweitern.
