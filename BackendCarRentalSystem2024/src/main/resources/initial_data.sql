-- Kunden-Tabelle erstellen
CREATE TABLE IF NOT EXISTS customers (
                                         id INT PRIMARY KEY,
                                         name VARCHAR(255),
    address VARCHAR(255),
    phone_number VARCHAR(20)
    );

-- Kunden-Daten einfügen
INSERT INTO customers (id, name, address, phone_number) VALUES
                                                            (1, 'Max Mustermann', 'Musterstraße 1, Musterstadt', '0123456789'),
                                                            (2, 'Erika Mustermann', 'Beispielweg 2, Beispielstadt', '0987654321');

-- Autos-Tabelle erstellen
CREATE TABLE IF NOT EXISTS cars (
                                    id INT PRIMARY KEY,
                                    model VARCHAR(255),
    license_plate VARCHAR(20),
    available BOOLEAN
    );

-- Autos-Daten einfügen
INSERT INTO cars (id, model, license_plate, available) VALUES
                                                           (1, 'Audi A4', 'M-AB1234', TRUE),
                                                           (2, 'VW Golf', 'B-ZY9876', FALSE);

-- Vermietungen-Tabelle erstellen
CREATE TABLE IF NOT EXISTS rentals (
                                       id INT PRIMARY KEY,
                                       customer_id INT,
                                       car_id INT,
                                       rental_date DATE,
                                       return_date DATE,
                                       FOREIGN KEY (customer_id) REFERENCES customers(id),
    FOREIGN KEY (car_id) REFERENCES cars(id)
    );

-- Vermietungen-Daten einfügen
-- Beispiel: INSERT INTO rentals (...) VALUES (...);
