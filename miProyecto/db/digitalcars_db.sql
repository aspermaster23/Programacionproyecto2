create schema digitalcars_db;
use digitalcars_db;

CREATE TABLE users (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
username VARCHAR(100) ,
email VARCHAR(150) ,
password VARCHAR (255) ,
birthday DATE ,
img VARCHAR(255) ,
created_at DATE,
updated_at DATE
);

CREATE TABLE cars (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
user_id INT UNSIGNED ,
car_brand VARCHAR(100) ,
car_color VARCHAR(100),
car_type VARCHAR (100) ,
car_description TEXT ,
car_year SMALLINT ,
car_image VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE comments(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
car_id INT UNSIGNED ,
user_id INT UNSIGNED ,
comentario VARCHAR(255) ,
created_at DATE,
updated_at DATE,

FOREIGN KEY (user_id) REFERENCES users(id),
FOREIGN KEY (car_id) REFERENCES cars(id) 
);


INSERT INTO users 
VALUES
(DEFAULT, "matuteCABJ", "matiRaviol@gmail.com", "flanmixto2",  "1994-04-12", "matute.png", DEFAULT, DEFAULT);
(DEFAULT, "gonchiruiz", "gonzalito@gmail.com", "eltucu12",  "1992-03-17", "gonchi.png", DEFAULT, DEFAULT,
(DEFAULT, "asper23", "asper@gmail.com", "aspermaster",  "1991-06-22", "asper.png", DEFAULT, DEFAULT),  
(DEFAULT, "petsafras", "pit@gmail.com", "vigilante2",  "1995-10-07", "pete.png", DEFAULT, DEFAULT);

INSERT INTO cars
VALUES
(DEFAULT, 1, "Porsche", "Silver","Cayenne", "El Porsche Cayenne S equipa un motor V6 de 2.9 litros de cilindrada con doble turbo y 324 kW (440 cv) de potencia máxima, y un par máximo de 550 Nm. El paso de 0 a 100 km/h se produce en 5,2 segundos (4,9 s. con Performance Start) alcanzando una velocidad máxima de 265 km/h.", 2021, "Porsche.png", DEFAULT, DEFAULT);
(default, 2, "BMW","white","M2 Coupe","El BMW M2 Coupé 2018 tiene un motor naftero de 2979cc con 6 cilindros ubicados en línea que alcanza una potencia máxima de 370CV a 6500rpm y par máximo de 500Nm a 1400-5560rpm. Esta mecánica permite recorrer el 0 a 100 km/h en 4.5 segundos y alcanzar una velocidad máxima de 250 km/h (limitada).","Bmw.jpg", DEFAULT, DEFAULT),
(DEFAULT, 3, "Mercedes", "Silver","E63", "Motor V8 4.0 bi-turbonaftero (612 cv y 850 Nm), combinado con caja automática AMG Speedshift MCT 9G (la primera con embragues múltiples del mundo) y tracción integral 4Matic+. LO MÁS: Las prestaciones. Acelera de 0 a 100 km/h en 3.4 segundos y alcanza una velocidad máxima de 300 km/h.", 2021, "mercedes.jpg", DEFAULT, DEFAULT);
INSERT INTO comments
VALUES
(DEFAULT, 1, 1, "Auto lindo!", DEFAULT, DEFAULT ),
(DEFAULT, 1, 1, "Auto lindo!", DEFAULT, DEFAULT );
