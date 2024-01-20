# CarRentalSystem2024 - Backend

## Projektstruktur

Das Backend-Projekt für das "CarRentalSystem2024" ist in einer strukturierten Weise aufgebaut, um verschiedene Aspekte der Backend-Logik effizient zu verwalten. Hier ist eine detaillierte Beschreibung der Ordner und Dateien:

### Hauptordner und Dateien

- **src/main**: Hauptordner, der den Quellcode des Backend-Projekts enthält.

### Java-Klassen (Logik und Datenstrukturen)

- **java/com/carrentalsystem2024**: Enthält alle Java-Klassen, die die Geschäftslogik und die Datenstrukturen definieren.
    - **Application.java**: Hauptklasse der Spring Boot-Anwendung, die den Ausgangspunkt des Servers definiert.
    - **Car.java**: Datenmodell für die Autos.
    - **Customer.java**: Datenmodell für die Kunden.
    - **Rental.java**: Datenmodell für die Vermietungen.

### Kontroller (API-Endpunkte)

- **controller**: Enthält alle Controller-Klassen, die die API-Endpunkte definieren.
    - **CarController.java**: API-Endpunkte für die Verwaltung von Autos.
    - **CustomerController.java**: API-Endpunkte für die Verwaltung von Kunden.
    - **RentalController.java**: API-Endpunkte für die Verwaltung von Vermietungen.

### Repositories (Datenzugriff)

- **repository**: Enthält alle Repository-Klassen, die den Datenzugriff auf die Datenbank ermöglichen.
    - **CarRepository.java**: Repository für den Zugriff auf Auto-Daten.
    - **CustomerRepository.java**: Repository für den Zugriff auf Kunden-Daten.
    - **RentalRepository.java**: Repository für den Zugriff auf Vermietungs-Daten.

### Services (Geschäftslogik)

- **service**: Enthält alle Service-Klassen, die die Geschäftslogik kapseln.
    - **CarService.java**: Service-Klasse für Geschäftslogik bezüglich Autos.
    - **CustomerService.java**: Service-Klasse für Geschäftslogik bezüglich Kunden.
    - **RentalService.java**: Service-Klasse für Geschäftslogik bezüglich Vermietungen.

### Ressourcen und Konfigurationen

- **resources**: Ordner für Ressourcen und Konfigurationsdateien.
    - **application.properties**: Konfigurationsdatei für die Anwendung, beispielsweise Datenbankverbindungen und Servereinstellungen.
    - **initial_data.sql**: SQL-Datei mit initialen Daten, die beim Start der Anwendung in die Datenbank geladen werden.
    - **data**: Ordner für zusätzliche Datenressourcen.

### Webapp und JSP-Dateien

- **webapp**: Ordner für Webanwendungsressourcen.
    - **index.jsp**: Startseite der Webanwendung.
    - **WEB-INF/web.xml**: Konfigurationsdatei für die Webanwendung.

## Zusammenfassung

Die Struktur und die Dateien des Backend-Projekts wurden sorgfältig angelegt, um eine klare Trennung der verschiedenen Teile der Anwendung zu ermöglichen. Dies unterstützt die Wartbarkeit sowie die Skalierbarkeit des Projekts. Jede Klasse, jedes Repository und jeder Service hat eine spezifische Rolle und trägt dazu bei, die Funktionalität der Anwendung auf eine organisierte Weise zu erweitern und zu verwalten.
