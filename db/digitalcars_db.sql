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
(DEFAULT, "matisilbert", "mati@gmail.com", "$10$uDNRm/a1Ved1JaB2TBAw4O7B/2qC4vkJN8uQknLuP2wq0KXEDuzA6",  "1994-04-12", "mati.png", DEFAULT, DEFAULT),
(DEFAULT, "AnaMaidana", "AnaMaidana@gmail.com", "$10$uDNRm/a1Ved1JaB2TBAw4O7B/2qC4vkJN8uQknLuP2wq0KXEDuzA6",  "1994-04-12", "ana.png", DEFAULT, DEFAULT),
(DEFAULT, "Alevivone", "alevivone@gmail.com", "$10$uDNRm/a1Ved1JaB2TBAw4O7B/2qC4vkJN8uQknLuP2wq0KXEDuzA6",  "1994-04-12", "ale.png", DEFAULT, DEFAULT);

INSERT INTO cars
VALUES
(DEFAULT, 1, "Porsche", "Silver","Cayenne", "El Porsche Cayenne S equipa un motor V6 de 2.9 litros de cilindrada con doble turbo y 324 kW (440 cv) de potencia máxima, y un par máximo de 550 Nm. El paso de 0 a 100 km/h se produce en 5,2 segundos (4,9 s. con Performance Start) alcanzando una velocidad máxima de 265 km/h.", "2021", "Porsche.png", DEFAULT, DEFAULT),
(default, 2, "BMW","white","M2 Coupe","El BMW M2 Coupé 2018 tiene un motor naftero de 2979cc con 6 cilindros ubicados en línea que alcanza una potencia máxima de 370CV a 6500rpm y par máximo de 500Nm a 1400-5560rpm. Esta mecánica permite recorrer el 0 a 100 km/h en 4.5 segundos y alcanzar una velocidad máxima de 250 km/h (limitada).","2020","Bmw.jpg", DEFAULT, DEFAULT),
(DEFAULT, 1, "Mercedes", "Silver","E63", "Motor V8 4.0 bi-turbonaftero (612 cv y 850 Nm), combinado con caja automática AMG Speedshift MCT 9G (la primera con embragues múltiples del mundo) y tracción integral 4Matic+. LO MÁS: Las prestaciones. Acelera de 0 a 100 km/h en 3.4 segundos y alcanza una velocidad máxima de 300 km/h.", "2021", "mercedes.jpg", DEFAULT, DEFAULT),
(DEFAULT, 3, "volkswagen", "blue","GOLF R", "El Golf R, un vehículo altamente deportivo que acelera de 0 a 100 km/h entre 4.7 segundos y alcanza una velocidad máxima de 250 km/h gracias a su motor 2.0 turbo. Dejando de lado su deportividad, tranquilamente puede ser un auto de diario, ya que es sumamente cómodo y suave.", "2021", "golf.jpg", DEFAULT, DEFAULT),
(DEFAULT, 2, "volkswagen", "silver","Amarok V6", "La nueva Amarok V6 2022 incorpora un motor V6 3.0 turbodiesel que entrega 258CV de potencia y 580nm de torque. Gracias a este conjunto mecánico la pick-up del segmento mediano es capaz de acelerar de 0 a 100 km/h en 7.4 segundos y alcanzar una velocidad máxima de 205 km/h.", "2021", "amarok.jpg", DEFAULT, DEFAULT),
(DEFAULT, 1, "toyota ", "White","Yaris GR", "El motor de 3 cilindros del GR Yaris produce 272 cv y 370 Nm, la manera de entregar su potencia al asfalto es mediante tracción integral denominada GR-Four. El conjunto mecánico que presenta este vehículo hace posible una aceleración de 0 a 100 km/h en 5.5 segundos y una velocidad máxima de 230 km/h.", "2021", "toyota.jpg", DEFAULT, DEFAULT),
(DEFAULT, 3, "dodge ", "Green","challenger", "El Challenger SRT Hellcat Redeye monta un V8 HEMI 6.2 de 797 caballos de potencia y 957 nm de torque. Esta bestialidad le permite acelerar de 0 a 100 km/h en 3,4 segundos, cubrir los 400 metros en 10,8 segundos y alcanzar una velocidad máxima de 327 km/h.", "2021", "dodge.jpg", DEFAULT, DEFAULT),
(DEFAULT, 2, "Ford ", "blue","raptor", "Con un motor EcoBoost Bi-Turbo V6 3.5L de alto rendimiento acompañado con una transmisión automática de 10 velocidades, la nueva F‑150 Raptor puede hacer frente a cualquier terreno. Gracias a sus 455CV de potencia y 691nm de torque, esta pick-up acelera de 0 a 100 km/h en 7.2 segundos alcanzando una velocidad máxima de 175 km/h.", "2021", "ford.jpg", DEFAULT, DEFAULT),
(DEFAULT, 1, "audi", "Silver","sq7", "El Audi SQ7 equipa un motor 4.0 TFSI que le permite acelerar de 0 a 100 km/h en 4,1 segundos y su velocidad máxima está limitada a 250 km/h.", "2021", "audi.jpg", DEFAULT, DEFAULT),
(DEFAULT, 3, "chevrolet", "blue","camaro", "La sexta generación del Camaro, es la más fuerte hasta el momento gracias a su motor 6.2L V8, 461 CV de potencia y 617 Nm de torque. Este modelo cuenta con una capacidad de aceleración de 0 a 100 Km/h, en 4,2 segundos. Su velocidad máxima es de 250 km/h autolimitada.", "2021", "chevrolet.jpg", DEFAULT, DEFAULT),
(DEFAULT, 1, "tesla", "red","model s", "El Tesla Model S Plaid es el primero con tres motores y alcanza los 628 kilómetros de rango entre recargas, entregando 1.020 CV de potencia máxima y realizando el 0-100 Km/h en 2,1 segundos con una velocidad máxima de 320 Km/h.", "2021", "tesla.jpg", DEFAULT, DEFAULT),
(DEFAULT, 2, "Mclaren", "pink"," 765 LT", "Su V8 biturbo de 4.0 litros entrega 765 CV a 7.500 rpm y entrega 800 Nm de par motor máximo a 5.500 rpm, pesa 1.339 kg lo que hace posible una aceleración de 0 a 100 km/h en 2.8 segundos y una velocidad máxima de 330 km/h.", "2021", "mclaren.jpg", DEFAULT, DEFAULT);
INSERT INTO comments
VALUES
(DEFAULT, 3, 1, "autazo!", DEFAULT, DEFAULT ),
(DEFAULT, 4, 3, "me vuelvo locooo!", DEFAULT, DEFAULT ),
(DEFAULT, 9, 1, "para mi cumpleanos quiero este!", DEFAULT, DEFAULT ),
(DEFAULT, 1, 2, "yo tenia este auto, realmente lo valee!", DEFAULT, DEFAULT ),
(DEFAULT, 2, 3, "no hay nada mas lindo que el interior de este autazo!", DEFAULT, DEFAULT ),
(DEFAULT, 5, 1, "que pedazo de fierro mamaderaaaaaaaa!", DEFAULT, DEFAULT ),
(DEFAULT, 6, 2, "no lo quiero, lo necesito!", DEFAULT, DEFAULT ),
(DEFAULT, 7, 3, "que ganas de estar al volante de esta maquina!", DEFAULT, DEFAULT ),
(DEFAULT, 8, 1, "quisiera ser volante para poder manejar este auto!", DEFAULT, DEFAULT );
