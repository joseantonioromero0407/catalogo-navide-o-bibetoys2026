export type Product = {
  id: string;
  page: number;
  category: string;
  name: string;
  code: string;
  price: number | null;
};

export const products: Product[] = [
  {
    "id": "2-1-BC1048",
    "page": 2,
    "category": "Vehículos de construcción RC",
    "name": "Camión volquete minero RC 1:24",
    "code": "BC1048",
    "price": 3680
  },
  {
    "id": "2-2-BC1043",
    "page": 2,
    "category": "Vehículos de construcción RC",
    "name": "Excavadora de aleación RC 1:20",
    "code": "BC1043",
    "price": 4880
  },
  {
    "id": "2-3-BC1057",
    "page": 2,
    "category": "Vehículos de construcción RC",
    "name": "Cargadora radiocontrolada 1:20",
    "code": "BC1057",
    "price": 4721
  },
  {
    "id": "2-4-YG1060",
    "page": 2,
    "category": "Vehículos de construcción RC",
    "name": "Excavadora RC con sensor 1:20",
    "code": "YG1060",
    "price": 6400
  },
  {
    "id": "3-1-CJ-5169220",
    "page": 3,
    "category": "Maquinaria radiocontrolada",
    "name": "Excavadora RC 3 en 1, 14 canales",
    "code": "CJ-5169220",
    "price": 5415
  },
  {
    "id": "3-2-CJ-4522449",
    "page": 3,
    "category": "Maquinaria radiocontrolada",
    "name": "Montacargas RC, 5 canales",
    "code": "CJ-4522449",
    "price": 3162
  },
  {
    "id": "3-3-CJ-5091363",
    "page": 3,
    "category": "Maquinaria radiocontrolada",
    "name": "Grúa torre RC, giro de cabina 360°",
    "code": "CJ-5091363",
    "price": 1280
  },
  {
    "id": "3-4-CJ-4167868",
    "page": 3,
    "category": "Maquinaria radiocontrolada",
    "name": "Excavadora mecánica colección Model Builder",
    "code": "CJ-4167868",
    "price": 2750
  },
  {
    "id": "4-1-LT514083",
    "page": 4,
    "category": "Autos radiocontrolados",
    "name": "Rock Crawler RC 1:6 4WD",
    "code": "LT514083",
    "price": 1605
  },
  {
    "id": "4-2-CJ-5082580",
    "page": 4,
    "category": "Autos radiocontrolados",
    "name": "Mini auto Drift RC 1:64",
    "code": "CJ-5082580",
    "price": 6820
  },
  {
    "id": "4-3-LT489096",
    "page": 4,
    "category": "Autos radiocontrolados",
    "name": "Auto deportivo RC 1:16",
    "code": "LT489096",
    "price": 3660
  },
  {
    "id": "4-4-CJ-4868119",
    "page": 4,
    "category": "Autos radiocontrolados",
    "name": "Auto superdeportivo RC 1:12",
    "code": "CJ-4868119",
    "price": 2280
  },
  {
    "id": "5-1-LT513159",
    "page": 5,
    "category": "Drones y vuelo inteligente",
    "name": "Dron L27 con cámara",
    "code": "LT513159",
    "price": 5388
  },
  {
    "id": "5-2-LT513140",
    "page": 5,
    "category": "Drones y vuelo inteligente",
    "name": "Dron plegable con cámara",
    "code": "LT513140",
    "price": 4140
  },
  {
    "id": "5-3-L0719",
    "page": 5,
    "category": "Drones y vuelo inteligente",
    "name": "Esfera voladora sin escobillas",
    "code": "L0719",
    "price": 2515
  },
  {
    "id": "6-1-RJ-02",
    "page": 6,
    "category": "Gadgets virales y squishies",
    "name": "Squishies antiestrés de panecillos kawaii",
    "code": "RJ-02",
    "price": 855
  },
  {
    "id": "6-2-RJ-01",
    "page": 6,
    "category": "Gadgets virales y squishies",
    "name": "Squishies antiestrés de gel con efecto dorado",
    "code": "RJ-01",
    "price": 855
  },
  {
    "id": "6-3-VP-1",
    "page": 6,
    "category": "Gadgets virales y squishies",
    "name": "Comunicador inteligente infantil con videollamada",
    "code": "VP-1",
    "price": 10090
  },
  {
    "id": "7-1-CJ-2157199",
    "page": 7,
    "category": "Robots y figuras transformables",
    "name": "Maquinaria transformable 5 en 1",
    "code": "CJ-2157199",
    "price": 1755
  },
  {
    "id": "7-2-CJ-5163854",
    "page": 7,
    "category": "Robots y figuras transformables",
    "name": "Ambulancia transformable",
    "code": "CJ-5163854",
    "price": 2446
  },
  {
    "id": "7-3-CJ-5163865",
    "page": 7,
    "category": "Robots y figuras transformables",
    "name": "Camión SWAT transformable",
    "code": "CJ-5163865",
    "price": 2446
  },
  {
    "id": "7-4-CJ-5165308",
    "page": 7,
    "category": "Robots y figuras transformables",
    "name": "Robot militar 5 en 1",
    "code": "CJ-5165308",
    "price": 4660
  },
  {
    "id": "8-1-XBY333-2",
    "page": 8,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-2",
    "price": 4082
  },
  {
    "id": "8-2-XBY333-3",
    "page": 8,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-3",
    "price": 4082
  },
  {
    "id": "8-3-XBY333-4",
    "page": 8,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-4",
    "price": 4082
  },
  {
    "id": "8-4-XBY333-5",
    "page": 8,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-5",
    "price": 4082
  },
  {
    "id": "9-1-XBY333-6",
    "page": 9,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-6",
    "price": 4082
  },
  {
    "id": "9-2-XBY333-7",
    "page": 9,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-7",
    "price": 4082
  },
  {
    "id": "9-3-XBY333-8",
    "page": 9,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-8",
    "price": 4082
  },
  {
    "id": "9-4-XBY333-9",
    "page": 9,
    "category": "Muñecas interactivas",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-9",
    "price": 4082
  },
  {
    "id": "10-1-XBY333-10",
    "page": 10,
    "category": "Muñecas y bebés",
    "name": "Muñeca interactiva 55 cm",
    "code": "XBY333-10",
    "price": 4082
  },
  {
    "id": "10-2-CJ-4833272",
    "page": 10,
    "category": "Muñecas y bebés",
    "name": "Muñeca interactiva con coche",
    "code": "CJ-4833272",
    "price": 1690
  },
  {
    "id": "10-3-CJ-4470190",
    "page": 10,
    "category": "Muñecas y bebés",
    "name": "Bebé reborn interactivo 43 cm",
    "code": "CJ-4470190",
    "price": 3942
  },
  {
    "id": "10-4-CJ-2361147",
    "page": 10,
    "category": "Muñecas y bebés",
    "name": "Muñeca fashion con 6 conjuntos",
    "code": "CJ-2361147",
    "price": 2020
  },
  {
    "id": "11-1-LT401480",
    "page": 11,
    "category": "Primera infancia y sensoriales",
    "name": "Móvil de cuna con sonajero y mordedor",
    "code": "LT401480",
    "price": 3010
  },
  {
    "id": "11-2-LT355364",
    "page": 11,
    "category": "Primera infancia y sensoriales",
    "name": "Mecedora musical eléctrica para bebé",
    "code": "LT355364",
    "price": 1524
  },
  {
    "id": "11-3-CJ-0914529",
    "page": 11,
    "category": "Primera infancia y sensoriales",
    "name": "Pato con rueda hidráulica",
    "code": "CJ-0914529",
    "price": 964
  },
  {
    "id": "11-4-CJ-4435912",
    "page": 11,
    "category": "Primera infancia y sensoriales",
    "name": "Tren didáctico 2 en 1 con bloques de goma blandos",
    "code": "CJ-4435912",
    "price": 2160
  },
  {
    "id": "12-1-CJ-4900002",
    "page": 12,
    "category": "Primera infancia y sensoriales",
    "name": "Tren andador interactivo",
    "code": "CJ-4900002",
    "price": 1705
  },
  {
    "id": "12-2-CJ-5164559",
    "page": 12,
    "category": "Primera infancia y sensoriales",
    "name": "Autobús didáctico 2 en 1",
    "code": "CJ-5164559",
    "price": 3570
  },
  {
    "id": "12-3-CJ-4069300",
    "page": 12,
    "category": "Primera infancia y sensoriales",
    "name": "Gimnasio didáctico 3 en 1",
    "code": "CJ-4069300",
    "price": 3595
  },
  {
    "id": "12-4-CJ-5058335",
    "page": 12,
    "category": "Primera infancia y sensoriales",
    "name": "Osito proyector de estrellas",
    "code": "CJ-5058335",
    "price": 2390
  },
  {
    "id": "13-1-LT291277",
    "page": 13,
    "category": "Educativos, STEM y construcción",
    "name": "Moto de construcción tipo Mecano, 117 piezas",
    "code": "LT291277",
    "price": 3000
  },
  {
    "id": "13-2-LT291274",
    "page": 13,
    "category": "Educativos, STEM y construcción",
    "name": "Coche de carreras de construcción tipo Mecano, 208 piezas",
    "code": "LT291274",
    "price": 3000
  },
  {
    "id": "13-3-CJ-2914557",
    "page": 13,
    "category": "Educativos, STEM y construcción",
    "name": "Bloques magnéticos tubulares, 168 piezas",
    "code": "CJ-2914557",
    "price": 1910
  },
  {
    "id": "13-4-CJ-4472647",
    "page": 13,
    "category": "Educativos, STEM y construcción",
    "name": "Laboratorio de 52 experimentos",
    "code": "CJ-4472647",
    "price": 2560
  },
  {
    "id": "14-1-LT500666",
    "page": 14,
    "category": "Juego de roles y profesiones",
    "name": "Caja registradora con escáner y alimentos",
    "code": "LT500666",
    "price": 2715
  },
  {
    "id": "14-2-CJ-5033302",
    "page": 14,
    "category": "Juego de roles y profesiones",
    "name": "Camión taller 2 en 1",
    "code": "CJ-5033302",
    "price": 1830
  },
  {
    "id": "14-3-LT502799",
    "page": 14,
    "category": "Juego de roles y profesiones",
    "name": "Maletín de maquillaje con ruedas de tercera generación",
    "code": "LT502799",
    "price": 1035
  },
  {
    "id": "14-4-CJ-4211056",
    "page": 14,
    "category": "Juego de roles y profesiones",
    "name": "Dentista de mascotas con luces",
    "code": "CJ-4211056",
    "price": 1278
  },
  {
    "id": "15-1-LT506100",
    "page": 15,
    "category": "Robots y juguetes inteligentes",
    "name": "Corgi de peluche interactivo",
    "code": "LT506100",
    "price": 2242
  },
  {
    "id": "15-2-CJ-5028136",
    "page": 15,
    "category": "Robots y juguetes inteligentes",
    "name": "Perro con IA (2 colores) RC",
    "code": "CJ-5028136",
    "price": 5022
  },
  {
    "id": "15-3-CJ-5091366",
    "page": 15,
    "category": "Robots y juguetes inteligentes",
    "name": "Perro con IA RC modelo básico",
    "code": "CJ-5091366",
    "price": 2135
  },
  {
    "id": "15-4-CJ-4965757",
    "page": 15,
    "category": "Robots y juguetes inteligentes",
    "name": "Perro robot con IA compacto RC",
    "code": "CJ-4965757",
    "price": 2710
  },
  {
    "id": "16-1-CJ-4480924",
    "page": 16,
    "category": "Robots y juguetes inteligentes",
    "name": "Perro bailarín inteligente",
    "code": "CJ-4480924",
    "price": 3580
  },
  {
    "id": "16-2-CJ-5169843",
    "page": 16,
    "category": "Robots y juguetes inteligentes",
    "name": "Gato bailarín inteligente",
    "code": "CJ-5169843",
    "price": 3595
  },
  {
    "id": "16-3-CJ-1291985",
    "page": 16,
    "category": "Robots y juguetes inteligentes",
    "name": "Robot policía interactivo con luces y música",
    "code": "CJ-1291985",
    "price": 2122
  },
  {
    "id": "16-4-CJ-4926826",
    "page": 16,
    "category": "Robots y juguetes inteligentes",
    "name": "Carro robot interactivo RC con efecto spray",
    "code": "CJ-4926826",
    "price": 3675
  },
  {
    "id": "17-1-CJ-5089107",
    "page": 17,
    "category": "Cañones, blásters y burbujas",
    "name": "Máquina de burbujas con efecto de humo",
    "code": "CJ-5089107",
    "price": 1580
  },
  {
    "id": "17-2-CJ-5089096",
    "page": 17,
    "category": "Cañones, blásters y burbujas",
    "name": "Rana lanzaburbujas con efecto de humo",
    "code": "CJ-5089096",
    "price": 1496
  },
  {
    "id": "17-3-CJ-4879443",
    "page": 17,
    "category": "Cañones, blásters y burbujas",
    "name": "Cañón automático de 60 orificios",
    "code": "CJ-4879443",
    "price": 1818
  },
  {
    "id": "17-4-CJ-4879442",
    "page": 17,
    "category": "Cañones, blásters y burbujas",
    "name": "Cañón de 60 orificios rosado",
    "code": "CJ-4879442",
    "price": 1818
  },
  {
    "id": "18-1-CJ-4241323",
    "page": 18,
    "category": "Cañones, blásters y burbujas",
    "name": "Cañón espacial azul de 40 orificios",
    "code": "CJ-4241323",
    "price": 1078
  },
  {
    "id": "18-2-CJ-4241322",
    "page": 18,
    "category": "Cañones, blásters y burbujas",
    "name": "Cañón espacial rosado de 40 orificios",
    "code": "CJ-4241322",
    "price": 1078
  },
  {
    "id": "18-3-CJ-5167560",
    "page": 18,
    "category": "Cañones, blásters y burbujas",
    "name": "Pistola transparente de burbujas con tambor giratorio",
    "code": "CJ-5167560",
    "price": 5999
  },
  {
    "id": "18-4-CJ-5157536",
    "page": 18,
    "category": "Cañones, blásters y burbujas",
    "name": "Cañón de burbujas de doble boquilla",
    "code": "CJ-5157536",
    "price": 3970
  },
  {
    "id": "19-1-CJ-4969562",
    "page": 19,
    "category": "Pistolas de agua eléctricas con efectos",
    "name": "Bláster eléctrico transparente M146 con efecto de vapor",
    "code": "CJ-4969562",
    "price": 1568
  },
  {
    "id": "19-2-CJ-4430328",
    "page": 19,
    "category": "Pistolas de agua eléctricas con efectos",
    "name": "Bláster eléctrico UMP45 con efecto de vapor — naranja",
    "code": "CJ-4430328",
    "price": 2342
  },
  {
    "id": "19-3-CJ-4430327",
    "page": 19,
    "category": "Pistolas de agua eléctricas con efectos",
    "name": "Bláster eléctrico UMP45 con efecto de vapor — azul",
    "code": "CJ-4430327",
    "price": 2342
  },
  {
    "id": "19-4-CJ-5165132",
    "page": 19,
    "category": "Pistolas de agua eléctricas con efectos",
    "name": "Pistola de agua eléctrica UZI con efecto de niebla",
    "code": "CJ-5165132",
    "price": 1785
  },
  {
    "id": "20-1-JY03023",
    "page": 20,
    "category": "Dibujo inteligente y tecnología creativa",
    "name": "Robot de dibujo inteligente",
    "code": "JY03023",
    "price": 928
  },
  {
    "id": "20-2-CJ-4490870",
    "page": 20,
    "category": "Dibujo inteligente y tecnología creativa",
    "name": "Pizarra inteligente con tarjetas de dibujo — Gato",
    "code": "CJ-4490870",
    "price": 2785
  },
  {
    "id": "20-3-CJ-4469086",
    "page": 20,
    "category": "Dibujo inteligente y tecnología creativa",
    "name": "Pizarra inteligente con tarjetas de dibujo — Cerdito",
    "code": "CJ-4469086",
    "price": 2785
  },
  {
    "id": "20-4-CJ-4490951",
    "page": 20,
    "category": "Dibujo inteligente y tecnología creativa",
    "name": "Pizarra LCD portátil a color 10,5 pulgadas — Gato Negro",
    "code": "CJ-4490951",
    "price": 2585
  },
  {
    "id": "21-1-GoTrax X1",
    "page": 21,
    "category": "Scooters y movilidad recreativa",
    "name": "GoKart eléctrico GoTrax X1",
    "code": "GoTrax X1",
    "price": 3555
  },
  {
    "id": "21-2-iRoller Pro S1",
    "page": 21,
    "category": "Scooters y movilidad recreativa",
    "name": "Kart eléctrico de derrape iRoller Pro S1",
    "code": "iRoller Pro S1",
    "price": 1505
  },
  {
    "id": "21-3-iRoller Pro S2",
    "page": 21,
    "category": "Scooters y movilidad recreativa",
    "name": "Kart eléctrico de derrape iRoller Pro S2",
    "code": "iRoller Pro S2",
    "price": 1540
  },
  {
    "id": "21-4-iRoller Pro S5",
    "page": 21,
    "category": "Scooters y movilidad recreativa",
    "name": "Kart eléctrico de derrape iRoller Pro S5",
    "code": "iRoller Pro S5",
    "price": 1540
  },
  {
    "id": "22-1-iRoller Mini K1",
    "page": 22,
    "category": "Scooters y movilidad recreativa",
    "name": "Mini kart eléctrico iRoller K1",
    "code": "iRoller Mini K1",
    "price": 1230
  },
  {
    "id": "22-2-iRoller Mini K2",
    "page": 22,
    "category": "Scooters y movilidad recreativa",
    "name": "Mini kart eléctrico iRoller K2",
    "code": "iRoller Mini K2",
    "price": 1250
  },
  {
    "id": "22-3-iRoller Mini K3",
    "page": 22,
    "category": "Scooters y movilidad recreativa",
    "name": "Mini kart eléctrico iRoller K3",
    "code": "iRoller Mini K3",
    "price": 1250
  },
  {
    "id": "22-4-iRoller Mini K4",
    "page": 22,
    "category": "Scooters y movilidad recreativa",
    "name": "Mini kart eléctrico iRoller K4",
    "code": "iRoller Mini K4",
    "price": 1250
  },
  {
    "id": "23-1-iEZgo K9",
    "page": 23,
    "category": "Scooters y movilidad recreativa",
    "name": "Scooter eléctrico de pie iEZgo K9",
    "code": "iEZgo K9",
    "price": 1605
  },
  {
    "id": "23-2-iEZgo K8",
    "page": 23,
    "category": "Scooters y movilidad recreativa",
    "name": "Scooter eléctrico plegable iEZgo K8",
    "code": "iEZgo K8",
    "price": 1790
  },
  {
    "id": "23-3-iEZgo S8",
    "page": 23,
    "category": "Scooters y movilidad recreativa",
    "name": "Scooter eléctrico plegable iEZgo S8 con aplicación",
    "code": "iEZgo S8",
    "price": 2430
  },
  {
    "id": "23-4-iEZgo S8 PRO",
    "page": 23,
    "category": "Scooters y movilidad recreativa",
    "name": "Scooter eléctrico plegable iEZgo S8 PRO",
    "code": "iEZgo S8 PRO",
    "price": 2525
  },
  {
    "id": "24-1-A9025",
    "page": 24,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion 29 cm — Estilo 1",
    "code": "A9025",
    "price": 2240
  },
  {
    "id": "24-2-A9024",
    "page": 24,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion 29 cm — Estilo 2",
    "code": "A9024",
    "price": 2154
  },
  {
    "id": "24-3-A9022",
    "page": 24,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion 29 cm con accesorios",
    "code": "A9022",
    "price": 1394
  },
  {
    "id": "24-4-A9006",
    "page": 24,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion con tocador",
    "code": "A9006",
    "price": 2018
  },
  {
    "id": "25-1-A9010",
    "page": 25,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion viajera",
    "code": "A9010",
    "price": 1985
  },
  {
    "id": "25-2-A9007",
    "page": 25,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion con tocador",
    "code": "A9007",
    "price": 2225
  },
  {
    "id": "25-3-A9004",
    "page": 25,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion con lavadora",
    "code": "A9004",
    "price": 2205
  },
  {
    "id": "25-4-A8986",
    "page": 25,
    "category": "Muñecas fashion y accesorios",
    "name": "Muñeca fashion con accesorios",
    "code": "A8986",
    "price": 2197
  },
  {
    "id": "26-1-A27077",
    "page": 26,
    "category": "Muñecas fashion y colecciones",
    "name": "Muñeca Candy interactiva 25 cm",
    "code": "A27077",
    "price": 3725
  },
  {
    "id": "26-2-A25946",
    "page": 26,
    "category": "Muñecas fashion y colecciones",
    "name": "Muñecas fashion con osito y bolso",
    "code": "A25946",
    "price": 2623
  },
  {
    "id": "26-3-A25948",
    "page": 26,
    "category": "Muñecas fashion y colecciones",
    "name": "Muñecas fashion con accesorios",
    "code": "A25948",
    "price": 2335
  },
  {
    "id": "26-4-L254",
    "page": 26,
    "category": "Muñecas fashion y colecciones",
    "name": "Muñeca musical gigante 81 cm",
    "code": "L254",
    "price": 1816
  }
];
