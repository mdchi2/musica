const SONGS_DATA = [
  {
    "id": 1,
    "cantante": "2 Minutos",
    "cancion": "Amor suicida",
    "genero": "Rock / Punk"
  },
  {
    "id": 2,
    "cantante": "2 Minutos",
    "cancion": "Mosca de bar",
    "genero": "Rock / Punk"
  },
  {
    "id": 3,
    "cantante": "Abba",
    "cancion": "Chiquitita",
    "genero": "Pop / Disco"
  },
  {
    "id": 4,
    "cantante": "Abba",
    "cancion": "Mamma mia",
    "genero": "Pop / Disco"
  },
  {
    "id": 5,
    "cantante": "Abel Zabala",
    "cancion": "Jesus mi fiel amigo",
    "genero": "Música Cristiana"
  },
  {
    "id": 6,
    "cantante": "Ac Dc",
    "cancion": "Back in black",
    "genero": "Rock"
  },
  {
    "id": 7,
    "cantante": "Ace Of Base",
    "cancion": "All that she wants",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 8,
    "cantante": "Ace Of Base",
    "cancion": "Beautifull life",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 9,
    "cantante": "Ace Of Base",
    "cancion": "Don t turn around",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 10,
    "cantante": "Ace Of Base",
    "cancion": "Happy nation",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 11,
    "cantante": "Ace Of Base",
    "cancion": "The sign",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 12,
    "cantante": "Aerosmith",
    "cancion": "Crazy",
    "genero": "Rock"
  },
  {
    "id": 13,
    "cantante": "Aerosmith",
    "cancion": "Cryin",
    "genero": "Rock"
  },
  {
    "id": 14,
    "cantante": "A-Ha",
    "cancion": "Take on me",
    "genero": "Pop / Synth-Pop"
  },
  {
    "id": 15,
    "cantante": "Airbag",
    "cancion": "Amor de verano",
    "genero": "Rock"
  },
  {
    "id": 16,
    "cantante": "Airbag",
    "cancion": "Solo aqui",
    "genero": "Rock"
  },
  {
    "id": 17,
    "cantante": "Alanis Morissette",
    "cancion": "Ironic",
    "genero": "Rock / Pop"
  },
  {
    "id": 18,
    "cantante": "Alejandro Lerner",
    "cancion": "Campeones de la vida",
    "genero": "Balada / Pop"
  },
  {
    "id": 19,
    "cantante": "Alejandro Lerner",
    "cancion": "Hay algo que te quiero decir",
    "genero": "Balada / Pop"
  },
  {
    "id": 20,
    "cantante": "Alejandro Lerner",
    "cancion": "Igual a los demas",
    "genero": "Balada / Pop"
  },
  {
    "id": 21,
    "cantante": "Alejandro Lerner",
    "cancion": "Mil veces lloro",
    "genero": "Balada / Pop"
  },
  {
    "id": 22,
    "cantante": "Alejandro Lerner",
    "cancion": "Volver a empezar",
    "genero": "Balada / Pop"
  },
  {
    "id": 23,
    "cantante": "Alex Campos",
    "cancion": "Al taller del maestro",
    "genero": "Música Cristiana"
  },
  {
    "id": 24,
    "cantante": "Alex Campos",
    "cancion": "Cuidare de ti",
    "genero": "Música Cristiana"
  },
  {
    "id": 25,
    "cantante": "Alex Campos",
    "cancion": "El sonido del silencio",
    "genero": "Música Cristiana"
  },
  {
    "id": 26,
    "cantante": "Alex Zurdo",
    "cancion": "Bye bye",
    "genero": "Música Cristiana"
  },
  {
    "id": 27,
    "cantante": "Alex Zurdo",
    "cancion": "Cierra la puerta",
    "genero": "Música Cristiana"
  },
  {
    "id": 28,
    "cantante": "Alex Zurdo",
    "cancion": "de la A a la Z",
    "genero": "Música Cristiana"
  },
  {
    "id": 29,
    "cantante": "Alex Zurdo",
    "cancion": "Donde estas",
    "genero": "Música Cristiana"
  },
  {
    "id": 30,
    "cantante": "Alex Zurdo",
    "cancion": "El pastor",
    "genero": "Música Cristiana"
  },
  {
    "id": 31,
    "cantante": "Alex Zurdo",
    "cancion": "Guarda tu corazon",
    "genero": "Música Cristiana"
  },
  {
    "id": 32,
    "cantante": "Alex Zurdo",
    "cancion": "La princesa y el sapo",
    "genero": "Música Cristiana"
  },
  {
    "id": 33,
    "cantante": "Alex Zurdo",
    "cancion": "Lo mio no pasa",
    "genero": "Música Cristiana"
  },
  {
    "id": 34,
    "cantante": "Alex Zurdo",
    "cancion": "Lucas 23",
    "genero": "Música Cristiana"
  },
  {
    "id": 35,
    "cantante": "Alex Zurdo",
    "cancion": "Mañana es hoy",
    "genero": "Música Cristiana"
  },
  {
    "id": 36,
    "cantante": "Alex Zurdo",
    "cancion": "Pentagrama",
    "genero": "Música Cristiana"
  },
  {
    "id": 37,
    "cantante": "Alex Zurdo",
    "cancion": "Te busco",
    "genero": "Música Cristiana"
  },
  {
    "id": 38,
    "cantante": "Alex Zurdo",
    "cancion": "Tengo victoria",
    "genero": "Música Cristiana"
  },
  {
    "id": 39,
    "cantante": "Alexander Pires",
    "cancion": "Cuando acaba el placer",
    "genero": "Balada / Pop"
  },
  {
    "id": 40,
    "cantante": "Alfredo Casero",
    "cancion": "Pizza conmigo",
    "genero": "Variado / Pop"
  },
  {
    "id": 41,
    "cantante": "Almafuerte",
    "cancion": "Se vos",
    "genero": "Heavy Metal"
  },
  {
    "id": 42,
    "cantante": "Almafuerte",
    "cancion": "Toro y pampa",
    "genero": "Heavy Metal"
  },
  {
    "id": 43,
    "cantante": "Almigthy",
    "cancion": "Genilipsis",
    "genero": "Urbano / Reggaeton"
  },
  {
    "id": 44,
    "cantante": "Almigthy",
    "cancion": "Justo juez",
    "genero": "Urbano / Reggaeton"
  },
  {
    "id": 45,
    "cantante": "Almigthy",
    "cancion": "Las que debi subir en soundcloud",
    "genero": "Urbano / Reggaeton"
  },
  {
    "id": 46,
    "cantante": "Almigthy",
    "cancion": "Lazaro",
    "genero": "Urbano / Reggaeton"
  },
  {
    "id": 47,
    "cantante": "Almigthy",
    "cancion": "No me arrodillo",
    "genero": "Urbano / Reggaeton"
  },
  {
    "id": 48,
    "cantante": "Almigthy",
    "cancion": "Resiliencia",
    "genero": "Urbano / Reggaeton"
  },
  {
    "id": 49,
    "cantante": "Almigthy",
    "cancion": "Todo lo mejoras",
    "genero": "Urbano / Reggaeton"
  },
  {
    "id": 50,
    "cantante": "Alphaville",
    "cancion": "Forever young",
    "genero": "Synth-Pop"
  },
  {
    "id": 51,
    "cantante": "Altos Cumbieros",
    "cancion": "No voy a llorar",
    "genero": "Cumbia"
  },
  {
    "id": 52,
    "cantante": "Amar Azul",
    "cancion": "Tormenta de nieve",
    "genero": "Cumbia"
  },
  {
    "id": 53,
    "cantante": "Amar Azul",
    "cancion": "Yo me enamore",
    "genero": "Cumbia"
  },
  {
    "id": 54,
    "cantante": "Amar Azul",
    "cancion": "Yo tomo licor",
    "genero": "Cumbia"
  },
  {
    "id": 55,
    "cantante": "Amistades Peligrosas",
    "cancion": "Me quedare solo",
    "genero": "Pop Latino"
  },
  {
    "id": 56,
    "cantante": "Andrea Bocelli",
    "cancion": "Vivo por ella",
    "genero": "Balada / Pop Operístico"
  },
  {
    "id": 57,
    "cantante": "Andres Calamaro",
    "cancion": "Cartas sin marcar",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 58,
    "cantante": "Andres Calamaro",
    "cancion": "Costumbres argentinas",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 59,
    "cantante": "Andres Calamaro",
    "cancion": "Crimenes perfecto",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 60,
    "cantante": "Andres Calamaro",
    "cancion": "Cuando te conoci",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 61,
    "cantante": "Andres Calamaro",
    "cancion": "Flaca",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 62,
    "cantante": "Andres Calamaro",
    "cancion": "La parte de adelante",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 63,
    "cantante": "Andres Calamaro",
    "cancion": "Me estas atrapando otra vez",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 64,
    "cantante": "Andres Calamaro",
    "cancion": "Mi gin tonic",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 65,
    "cantante": "Andres Calamaro",
    "cancion": "No me nombres",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 66,
    "cantante": "Andres Calamaro",
    "cancion": "No se puede vivir del amor",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 67,
    "cantante": "Andres Calamaro",
    "cancion": "Sin documento",
    "genero": "Pop Rock / Balada"
  },
  {
    "id": 68,
    "cantante": "Antonio Rios",
    "cancion": "Nunca me falles",
    "genero": "Cumbia"
  },
  {
    "id": 69,
    "cantante": "Aqua",
    "cancion": "Barbie girl",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 70,
    "cantante": "Aqua",
    "cancion": "Dr jones",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 71,
    "cantante": "Arbol",
    "cancion": "El fantasma",
    "genero": "Rock"
  },
  {
    "id": 72,
    "cantante": "Arbol",
    "cancion": "Trenes camiones y tractores",
    "genero": "Rock"
  },
  {
    "id": 73,
    "cantante": "Aterciopelados",
    "cancion": "Bolero falaz",
    "genero": "Rock / Pop"
  },
  {
    "id": 74,
    "cantante": "Attaque 77",
    "cancion": "Arrancacorazones",
    "genero": "Rock / Punk"
  },
  {
    "id": 75,
    "cantante": "Attaque 77",
    "cancion": "Hacelo por mi",
    "genero": "Rock / Punk"
  },
  {
    "id": 76,
    "cantante": "Autenticos Decadentes",
    "cancion": "Corazon",
    "genero": "Rock / Ska"
  },
  {
    "id": 77,
    "cantante": "Autenticos Decadentes",
    "cancion": "Diosa",
    "genero": "Rock / Ska"
  },
  {
    "id": 78,
    "cantante": "Autenticos Decadentes",
    "cancion": "Loco tu forma de ser",
    "genero": "Rock / Ska"
  },
  {
    "id": 79,
    "cantante": "Aventura",
    "cancion": "Obsecion",
    "genero": "Bachata"
  },
  {
    "id": 80,
    "cantante": "Aventura",
    "cancion": "Todavia me amas",
    "genero": "Bachata"
  },
  {
    "id": 81,
    "cantante": "Avril Lavigne",
    "cancion": "Complicated",
    "genero": "Pop Rock"
  },
  {
    "id": 82,
    "cantante": "Avril Lavigne",
    "cancion": "Complicated acustic",
    "genero": "Pop Rock"
  },
  {
    "id": 83,
    "cantante": "Axel",
    "cancion": "Tu amor por siempre",
    "genero": "Balada / Pop"
  },
  {
    "id": 84,
    "cantante": "Azucar Moreno",
    "cancion": "Solo se vive una vez",
    "genero": "Pop / Flamenco"
  },
  {
    "id": 85,
    "cantante": "Babasonicos",
    "cancion": "Carismatico",
    "genero": "Rock / Pop"
  },
  {
    "id": 86,
    "cantante": "Babasonicos",
    "cancion": "El colmo",
    "genero": "Rock / Pop"
  },
  {
    "id": 87,
    "cantante": "Babasonicos",
    "cancion": "Irresponsable",
    "genero": "Rock / Pop"
  },
  {
    "id": 88,
    "cantante": "Babasonicos",
    "cancion": "Microdancing",
    "genero": "Rock / Pop"
  },
  {
    "id": 89,
    "cantante": "Babasonicos",
    "cancion": "Y que",
    "genero": "Rock / Pop"
  },
  {
    "id": 90,
    "cantante": "Bacilos",
    "cancion": "Mi primer millon",
    "genero": "Pop Latino"
  },
  {
    "id": 91,
    "cantante": "Back Street Boys",
    "cancion": "Quit playing games with my heart",
    "genero": "Pop"
  },
  {
    "id": 92,
    "cantante": "Banda Blanca",
    "cancion": "Sopa de caracol",
    "genero": "Tropical"
  },
  {
    "id": 93,
    "cantante": "Bersuite Vergarabat",
    "cancion": "El tiempo no para",
    "genero": "Rock Nacional"
  },
  {
    "id": 94,
    "cantante": "Bersuite Vergarabat",
    "cancion": "La soledad",
    "genero": "Rock Nacional"
  },
  {
    "id": 95,
    "cantante": "Bersuite Vergarabat",
    "cancion": "Un pacto",
    "genero": "Rock Nacional"
  },
  {
    "id": 96,
    "cantante": "Blippi",
    "cancion": "Soy una escabadora",
    "genero": "Infantil"
  },
  {
    "id": 97,
    "cantante": "Bluey",
    "cancion": "Dance mode",
    "genero": "Infantil"
  },
  {
    "id": 98,
    "cantante": "Bob El Tren",
    "cancion": "Aventura de formas",
    "genero": "Infantil"
  },
  {
    "id": 99,
    "cantante": "Bob El Tren",
    "cancion": "En un paseo de colores",
    "genero": "Infantil"
  },
  {
    "id": 100,
    "cantante": "Bob El Tren",
    "cancion": "Visita la granja",
    "genero": "Infantil"
  },
  {
    "id": 101,
    "cantante": "Bon Jovi",
    "cancion": "Always",
    "genero": "Rock"
  },
  {
    "id": 102,
    "cantante": "Bon Jovi",
    "cancion": "Bed of roses",
    "genero": "Rock"
  },
  {
    "id": 103,
    "cantante": "Bon Jovi",
    "cancion": "It s my life",
    "genero": "Rock"
  },
  {
    "id": 104,
    "cantante": "Bon Jovi",
    "cancion": "Living on a prayed",
    "genero": "Rock"
  },
  {
    "id": 105,
    "cantante": "Bon Jovi",
    "cancion": "Thank you for love me",
    "genero": "Rock"
  },
  {
    "id": 106,
    "cantante": "Bon Jovi",
    "cancion": "You give love a bad name",
    "genero": "Rock"
  },
  {
    "id": 107,
    "cantante": "Boy George",
    "cancion": "The crying games",
    "genero": "Pop"
  },
  {
    "id": 108,
    "cantante": "Bruce Springsteen",
    "cancion": "Burn in a usa",
    "genero": "Rock"
  },
  {
    "id": 109,
    "cantante": "Bryan Adams",
    "cancion": "every I do",
    "genero": "Rock / Pop"
  },
  {
    "id": 110,
    "cantante": "Caballeros De La Quema",
    "cancion": "Fulanos de nadie",
    "genero": "Rock Nacional"
  },
  {
    "id": 111,
    "cantante": "Caballeros De La Quema",
    "cancion": "Oxidado",
    "genero": "Rock Nacional"
  },
  {
    "id": 112,
    "cantante": "Caballeros De La Quema",
    "cancion": "Sapo de otro pozo",
    "genero": "Rock Nacional"
  },
  {
    "id": 113,
    "cantante": "Cae",
    "cancion": "Te recuerdo",
    "genero": "Balada / Rock"
  },
  {
    "id": 114,
    "cantante": "Callejeros",
    "cancion": "9 de julio",
    "genero": "Rock Nacional"
  },
  {
    "id": 115,
    "cantante": "Callejeros",
    "cancion": "Creo",
    "genero": "Rock Nacional"
  },
  {
    "id": 116,
    "cantante": "Callejeros",
    "cancion": "Noche fria",
    "genero": "Rock Nacional"
  },
  {
    "id": 117,
    "cantante": "Callejeros",
    "cancion": "Prohibido",
    "genero": "Rock Nacional"
  },
  {
    "id": 118,
    "cantante": "Callejeros",
    "cancion": "Rocanroles sin destino",
    "genero": "Rock Nacional"
  },
  {
    "id": 119,
    "cantante": "Catupecu Machu",
    "cancion": "A veces vuelvo",
    "genero": "Rock"
  },
  {
    "id": 120,
    "cantante": "Celia Cruz",
    "cancion": "La vida es un carnaval",
    "genero": "Salsa"
  },
  {
    "id": 121,
    "cantante": "Celine Dion",
    "cancion": "My heart will go on",
    "genero": "Pop / Balada"
  },
  {
    "id": 122,
    "cantante": "Chakales",
    "cancion": "Vete de mi lado",
    "genero": "Variado / Pop"
  },
  {
    "id": 123,
    "cantante": "Chapa C",
    "cancion": "Lloraras por mi",
    "genero": "Variado / Pop"
  },
  {
    "id": 124,
    "cantante": "Charros",
    "cancion": "Amores como el nuestro",
    "genero": "Variado / Pop"
  },
  {
    "id": 125,
    "cantante": "Chichi Peralta",
    "cancion": "Amor narcotico",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 126,
    "cantante": "Chichi Peralta",
    "cancion": "Procura",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 127,
    "cantante": "Chocolate",
    "cancion": "Mayonesa",
    "genero": "Variado / Pop"
  },
  {
    "id": 128,
    "cantante": "Christian Puga",
    "cancion": "No le dijo nada",
    "genero": "Variado / Pop"
  },
  {
    "id": 129,
    "cantante": "Christine D Clario",
    "cancion": "Gloria en lo alto",
    "genero": "Música Cristiana"
  },
  {
    "id": 130,
    "cantante": "Christine D Clario",
    "cancion": "Musica cristiana",
    "genero": "Música Cristiana"
  },
  {
    "id": 131,
    "cantante": "Ciencias Naturales",
    "cancion": "El poeta enamorado",
    "genero": "Variado / Pop"
  },
  {
    "id": 132,
    "cantante": "Clint Eastwood",
    "cancion": "Gorillaz",
    "genero": "Variado / Pop"
  },
  {
    "id": 133,
    "cantante": "Comanche",
    "cancion": "Tonta",
    "genero": "Cumbia"
  },
  {
    "id": 134,
    "cantante": "Coti",
    "cancion": "Antes que ver el sol",
    "genero": "Pop Rock"
  },
  {
    "id": 135,
    "cantante": "Coti",
    "cancion": "Nada de esto fue un error",
    "genero": "Pop Rock"
  },
  {
    "id": 136,
    "cantante": "Coti",
    "cancion": "Otra vez",
    "genero": "Pop Rock"
  },
  {
    "id": 137,
    "cantante": "Coti",
    "cancion": "Tu nombre",
    "genero": "Pop Rock"
  },
  {
    "id": 138,
    "cantante": "Crazy Frog",
    "cancion": "Crazy frog",
    "genero": "Variado / Pop"
  },
  {
    "id": 139,
    "cantante": "Creedence",
    "cancion": "Have you ever see the rain",
    "genero": "Rock"
  },
  {
    "id": 140,
    "cantante": "Creedence",
    "cancion": "Proud mary",
    "genero": "Rock"
  },
  {
    "id": 141,
    "cantante": "Creedence",
    "cancion": "The midnight special",
    "genero": "Rock"
  },
  {
    "id": 142,
    "cantante": "Cristian Castro",
    "cancion": "Lloran las rosas",
    "genero": "Balada / Pop"
  },
  {
    "id": 143,
    "cantante": "Cristian Castro",
    "cancion": "Vuelveme a querer",
    "genero": "Balada / Pop"
  },
  {
    "id": 144,
    "cantante": "Cristian Castro",
    "cancion": "Yo queria",
    "genero": "Balada / Pop"
  },
  {
    "id": 145,
    "cantante": "Culture Rock",
    "cancion": "Karma chameleon",
    "genero": "Rock"
  },
  {
    "id": 146,
    "cantante": "Cyndi Lauper",
    "cancion": "Girls just want to have fun",
    "genero": "Pop"
  },
  {
    "id": 147,
    "cantante": "Daddy Yankee",
    "cancion": "Lo veo",
    "genero": "Reggaeton"
  },
  {
    "id": 148,
    "cantante": "Damas Gratis",
    "cancion": "Industria argentina",
    "genero": "Cumbia Villera"
  },
  {
    "id": 149,
    "cantante": "Daniel Calveti",
    "cancion": "La niña de tus ojos",
    "genero": "Música Cristiana"
  },
  {
    "id": 150,
    "cantante": "Daniel Calveti",
    "cancion": "mi mundo necesita de Ti",
    "genero": "Música Cristiana"
  },
  {
    "id": 151,
    "cantante": "Daniel Calveti",
    "cancion": "Mi refugio",
    "genero": "Música Cristiana"
  },
  {
    "id": 152,
    "cantante": "Danilo Montero",
    "cancion": "Eres todopoderoso",
    "genero": "Música Cristiana"
  },
  {
    "id": 153,
    "cantante": "Danilo Montero",
    "cancion": "te alabare mi buen Jesus",
    "genero": "Música Cristiana"
  },
  {
    "id": 154,
    "cantante": "David Bisbal",
    "cancion": "Digale",
    "genero": "Variado / Pop"
  },
  {
    "id": 155,
    "cantante": "David Quindal",
    "cancion": "Libre para adorar",
    "genero": "Variado / Pop"
  },
  {
    "id": 156,
    "cantante": "David Rees",
    "cancion": "De ellos aprendi",
    "genero": "Variado / Pop"
  },
  {
    "id": 157,
    "cantante": "Diego Torres",
    "cancion": "Abriendo caminos",
    "genero": "Pop Latino"
  },
  {
    "id": 158,
    "cantante": "Diego Torres",
    "cancion": "Color esperanza",
    "genero": "Pop Latino"
  },
  {
    "id": 159,
    "cantante": "Diego Torres",
    "cancion": "Donde van",
    "genero": "Pop Latino"
  },
  {
    "id": 160,
    "cantante": "Diego Torres",
    "cancion": "Que no me pierda",
    "genero": "Pop Latino"
  },
  {
    "id": 161,
    "cantante": "Diego Torres",
    "cancion": "Sueños",
    "genero": "Pop Latino"
  },
  {
    "id": 162,
    "cantante": "Diego Torres",
    "cancion": "Tratar de estar mejor",
    "genero": "Pop Latino"
  },
  {
    "id": 163,
    "cantante": "Dire Straits",
    "cancion": "Sultans of swing",
    "genero": "Variado / Pop"
  },
  {
    "id": 164,
    "cantante": "Divididos",
    "cancion": "Que ves",
    "genero": "Rock Nacional"
  },
  {
    "id": 165,
    "cantante": "Divididos",
    "cancion": "Spagueti del rock",
    "genero": "Rock Nacional"
  },
  {
    "id": 166,
    "cantante": "Dlg",
    "cancion": "La quiero a morir",
    "genero": "Variado / Pop"
  },
  {
    "id": 167,
    "cantante": "Dread Mar",
    "cancion": "Tu sin mi",
    "genero": "Variado / Pop"
  },
  {
    "id": 168,
    "cantante": "Duo Tiempo De Sol",
    "cancion": "Twist de los ratoncitos",
    "genero": "Variado / Pop"
  },
  {
    "id": 169,
    "cantante": "Duran Duran",
    "cancion": "Ordinary world",
    "genero": "Variado / Pop"
  },
  {
    "id": 170,
    "cantante": "Eiffel 65",
    "cancion": "Blue",
    "genero": "Variado / Pop"
  },
  {
    "id": 171,
    "cantante": "El General",
    "cancion": "Te ves buena",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 172,
    "cantante": "El Original",
    "cancion": "Yo soy tu maestro",
    "genero": "Variado / Pop"
  },
  {
    "id": 173,
    "cantante": "El Simbolo",
    "cancion": "La isla del sol",
    "genero": "Variado / Pop"
  },
  {
    "id": 174,
    "cantante": "Ella Baila Sola",
    "cancion": "Lo echamos a suertes",
    "genero": "Variado / Pop"
  },
  {
    "id": 175,
    "cantante": "Elton John",
    "cancion": "Candle in the wind",
    "genero": "Pop / Rock"
  },
  {
    "id": 176,
    "cantante": "Elton John",
    "cancion": "Sacrifice",
    "genero": "Pop / Rock"
  },
  {
    "id": 177,
    "cantante": "Elvis Crespo",
    "cancion": "Tu sonrisa",
    "genero": "Variado / Pop"
  },
  {
    "id": 178,
    "cantante": "Eminem",
    "cancion": "Lose yourself",
    "genero": "Hip Hop / Rap"
  },
  {
    "id": 179,
    "cantante": "Eminem",
    "cancion": "Stan",
    "genero": "Hip Hop / Rap"
  },
  {
    "id": 180,
    "cantante": "Eminem",
    "cancion": "Without me",
    "genero": "Hip Hop / Rap"
  },
  {
    "id": 181,
    "cantante": "En Espiritu Y En Verdad",
    "cancion": "cuan grande es Dios",
    "genero": "Música Cristiana"
  },
  {
    "id": 182,
    "cantante": "En Espiritu Y En Verdad",
    "cancion": "Perfume a tus pies",
    "genero": "Música Cristiana"
  },
  {
    "id": 183,
    "cantante": "Enanitos Verdes",
    "cancion": "Mariposas",
    "genero": "Rock Nacional"
  },
  {
    "id": 184,
    "cantante": "Enrique Iglesias",
    "cancion": "Esperanza",
    "genero": "Variado / Pop"
  },
  {
    "id": 185,
    "cantante": "Enrique Iglesias",
    "cancion": "Heroe",
    "genero": "Variado / Pop"
  },
  {
    "id": 186,
    "cantante": "Enrique Iglesias",
    "cancion": "Por amarte",
    "genero": "Variado / Pop"
  },
  {
    "id": 187,
    "cantante": "Enrique Iglesias",
    "cancion": "Si tu te vas",
    "genero": "Variado / Pop"
  },
  {
    "id": 188,
    "cantante": "Era",
    "cancion": "Ameno",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 189,
    "cantante": "Era",
    "cancion": "Divano",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 190,
    "cantante": "Erasure",
    "cancion": "Oh l amore",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 191,
    "cantante": "Eros Ramazzotti",
    "cancion": "Cosa de la vida",
    "genero": "Balada / Pop"
  },
  {
    "id": 192,
    "cantante": "Escucha",
    "cancion": "Triste palomita",
    "genero": "Variado / Pop"
  },
  {
    "id": 193,
    "cantante": "Estelares",
    "cancion": "Ella dijo",
    "genero": "Rock Nacional"
  },
  {
    "id": 194,
    "cantante": "Estelares",
    "cancion": "Un dia perfecto",
    "genero": "Rock Nacional"
  },
  {
    "id": 195,
    "cantante": "Europe",
    "cancion": "Final countdown",
    "genero": "Variado / Pop"
  },
  {
    "id": 196,
    "cantante": "Fabiana Cantilo",
    "cancion": "Mary poppins y el deshollinador",
    "genero": "Pop Rock"
  },
  {
    "id": 197,
    "cantante": "Fabiana Cantilo",
    "cancion": "Mi enfermedad",
    "genero": "Pop Rock"
  },
  {
    "id": 198,
    "cantante": "Fabio Zambrana",
    "cancion": "La bomba",
    "genero": "Variado / Pop"
  },
  {
    "id": 199,
    "cantante": "Fabulosos Cadillacs",
    "cancion": "Vasos vacios",
    "genero": "Rock / Ska"
  },
  {
    "id": 200,
    "cantante": "Fabulosos Cadillacs",
    "cancion": "Vos sabes",
    "genero": "Rock / Ska"
  },
  {
    "id": 201,
    "cantante": "Farruko",
    "cancion": "Musica cristiana",
    "genero": "Reggaeton / Urbano"
  },
  {
    "id": 202,
    "cantante": "Farruko",
    "cancion": "Nazareno",
    "genero": "Reggaeton / Urbano"
  },
  {
    "id": 203,
    "cantante": "Farruko",
    "cancion": "Pepas",
    "genero": "Reggaeton / Urbano"
  },
  {
    "id": 204,
    "cantante": "Fey",
    "cancion": "Azucar amargo",
    "genero": "Variado / Pop"
  },
  {
    "id": 205,
    "cantante": "Fito Paez",
    "cancion": "11 y 6",
    "genero": "Rock Nacional"
  },
  {
    "id": 206,
    "cantante": "Fito Paez",
    "cancion": "A rodar mi vida",
    "genero": "Rock Nacional"
  },
  {
    "id": 207,
    "cantante": "Fito Paez",
    "cancion": "Circo beat",
    "genero": "Rock Nacional"
  },
  {
    "id": 208,
    "cantante": "Fito Paez",
    "cancion": "Dos dias en la vida",
    "genero": "Rock Nacional"
  },
  {
    "id": 209,
    "cantante": "Fools Garden",
    "cancion": "Lemon tree",
    "genero": "Variado / Pop"
  },
  {
    "id": 210,
    "cantante": "Funky",
    "cancion": "Disfrazao",
    "genero": "Música Cristiana"
  },
  {
    "id": 211,
    "cantante": "Funky",
    "cancion": "Hasta que llegue yo",
    "genero": "Música Cristiana"
  },
  {
    "id": 212,
    "cantante": "Funky",
    "cancion": "Heme aqui",
    "genero": "Música Cristiana"
  },
  {
    "id": 213,
    "cantante": "Funky",
    "cancion": "Indestructible",
    "genero": "Música Cristiana"
  },
  {
    "id": 214,
    "cantante": "Funky",
    "cancion": "Justo a tiempo",
    "genero": "Música Cristiana"
  },
  {
    "id": 215,
    "cantante": "Funky",
    "cancion": "Reset",
    "genero": "Música Cristiana"
  },
  {
    "id": 216,
    "cantante": "Funky",
    "cancion": "soy Tu Dios",
    "genero": "Música Cristiana"
  },
  {
    "id": 217,
    "cantante": "Gilda",
    "cancion": "No es mi despedida",
    "genero": "Cumbia"
  },
  {
    "id": 218,
    "cantante": "Gilda",
    "cancion": "Paisaje",
    "genero": "Cumbia"
  },
  {
    "id": 219,
    "cantante": "Green Day",
    "cancion": "Basket case",
    "genero": "Punk Rock"
  },
  {
    "id": 220,
    "cantante": "Green Day",
    "cancion": "when I come arround",
    "genero": "Punk Rock"
  },
  {
    "id": 221,
    "cantante": "Guasones",
    "cancion": "Reyes de la noche",
    "genero": "Variado / Pop"
  },
  {
    "id": 222,
    "cantante": "Guns And Roses",
    "cancion": "Cry",
    "genero": "Hard Rock"
  },
  {
    "id": 223,
    "cantante": "Guns And Roses",
    "cancion": "November rain",
    "genero": "Hard Rock"
  },
  {
    "id": 224,
    "cantante": "Guns And Roses",
    "cancion": "Sweet child of mine",
    "genero": "Hard Rock"
  },
  {
    "id": 225,
    "cantante": "Haddaway",
    "cancion": "What is love",
    "genero": "Variado / Pop"
  },
  {
    "id": 226,
    "cantante": "Helen D La Roca",
    "cancion": "Haz llover",
    "genero": "Variado / Pop"
  },
  {
    "id": 227,
    "cantante": "Hillsong",
    "cancion": "Aqui estoy",
    "genero": "Música Cristiana"
  },
  {
    "id": 228,
    "cantante": "Huey Lewis",
    "cancion": "Power of love",
    "genero": "Variado / Pop"
  },
  {
    "id": 229,
    "cantante": "Ilegales",
    "cancion": "La morena",
    "genero": "Variado / Pop"
  },
  {
    "id": 230,
    "cantante": "Intoxicados",
    "cancion": "Casi sin pensar",
    "genero": "Rock Nacional"
  },
  {
    "id": 231,
    "cantante": "Intoxicados",
    "cancion": "Fuego",
    "genero": "Rock Nacional"
  },
  {
    "id": 232,
    "cantante": "Intoxicados",
    "cancion": "Fuiste lo mejor",
    "genero": "Rock Nacional"
  },
  {
    "id": 233,
    "cantante": "Intoxicados",
    "cancion": "Nunca quise",
    "genero": "Rock Nacional"
  },
  {
    "id": 234,
    "cantante": "Intoxicados",
    "cancion": "Pila pila",
    "genero": "Rock Nacional"
  },
  {
    "id": 235,
    "cantante": "Irene Cara",
    "cancion": "Flashdance what a feeling",
    "genero": "Música Cristiana"
  },
  {
    "id": 236,
    "cantante": "Ismael Kiwakawiwo",
    "cancion": "Somewhere over the rainbow",
    "genero": "Variado / Pop"
  },
  {
    "id": 237,
    "cantante": "Jaf",
    "cancion": "Maravillosa esta noche",
    "genero": "Rock / Blues"
  },
  {
    "id": 238,
    "cantante": "Jaf",
    "cancion": "Tal vez mañana brille el sol",
    "genero": "Rock / Blues"
  },
  {
    "id": 239,
    "cantante": "Jaf",
    "cancion": "Todo mi amor",
    "genero": "Rock / Blues"
  },
  {
    "id": 240,
    "cantante": "Jaime Murrell",
    "cancion": "quiero mas de Ti",
    "genero": "Variado / Pop"
  },
  {
    "id": 241,
    "cantante": "James Blunt",
    "cancion": "You are beautiful",
    "genero": "Variado / Pop"
  },
  {
    "id": 242,
    "cantante": "Jarabe De Palo",
    "cancion": "Depende",
    "genero": "Variado / Pop"
  },
  {
    "id": 243,
    "cantante": "Jean Carlos",
    "cancion": "Quiereme",
    "genero": "Variado / Pop"
  },
  {
    "id": 244,
    "cantante": "Jennifer Lopez",
    "cancion": "No me ames",
    "genero": "Variado / Pop"
  },
  {
    "id": 245,
    "cantante": "Jerry Lee Lewis",
    "cancion": "Great balls of fire",
    "genero": "Variado / Pop"
  },
  {
    "id": 246,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Ayer te vi",
    "genero": "Música Cristiana"
  },
  {
    "id": 247,
    "cantante": "Jesus Adrian Romero",
    "cancion": "cerca de Ti",
    "genero": "Música Cristiana"
  },
  {
    "id": 248,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Como la brisa",
    "genero": "Música Cristiana"
  },
  {
    "id": 249,
    "cantante": "Jesus Adrian Romero",
    "cancion": "El aire de tu casa",
    "genero": "Música Cristiana"
  },
  {
    "id": 250,
    "cantante": "Jesus Adrian Romero",
    "cancion": "El brillo de mis ojos",
    "genero": "Música Cristiana"
  },
  {
    "id": 251,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Esperame",
    "genero": "Música Cristiana"
  },
  {
    "id": 252,
    "cantante": "Jesus Adrian Romero",
    "cancion": "No es como yo",
    "genero": "Música Cristiana"
  },
  {
    "id": 253,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Princesas magicas",
    "genero": "Música Cristiana"
  },
  {
    "id": 254,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Que seria de mi",
    "genero": "Música Cristiana"
  },
  {
    "id": 255,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Si hubiera estado alli",
    "genero": "Música Cristiana"
  },
  {
    "id": 256,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Tal como soy",
    "genero": "Música Cristiana"
  },
  {
    "id": 257,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Te dare lo mejor",
    "genero": "Música Cristiana"
  },
  {
    "id": 258,
    "cantante": "Jesus Adrian Romero",
    "cancion": "Unidos por la cruz",
    "genero": "Música Cristiana"
  },
  {
    "id": 259,
    "cantante": "Jose Luis Reyes",
    "cancion": "Algo esta cayendo",
    "genero": "Variado / Pop"
  },
  {
    "id": 260,
    "cantante": "Jovanotti",
    "cancion": "Penso positivo",
    "genero": "Variado / Pop"
  },
  {
    "id": 261,
    "cantante": "Juan Luis Guerra",
    "cancion": "Bachata rosas",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 262,
    "cantante": "Juan Luis Guerra",
    "cancion": "Caballo blanco",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 263,
    "cantante": "Juan Luis Guerra",
    "cancion": "Exitos cristianos",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 264,
    "cantante": "Juan Luis Guerra",
    "cancion": "Frio frio",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 265,
    "cantante": "Juan Luis Guerra",
    "cancion": "mi Padre me ama",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 266,
    "cantante": "Juan Luis Guerra",
    "cancion": "Ojala que llueva cafe",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 267,
    "cantante": "Juan Luis Guerra",
    "cancion": "Tan solo he venido",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 268,
    "cantante": "Juan Luis Guerra",
    "cancion": "Visa para un sueño",
    "genero": "Bachata / Merengue"
  },
  {
    "id": 269,
    "cantante": "Juanes",
    "cancion": "Para tu amor",
    "genero": "Pop Rock Latino"
  },
  {
    "id": 270,
    "cantante": "Julieta Venegas",
    "cancion": "Algo esta cambiando",
    "genero": "Pop Latino"
  },
  {
    "id": 271,
    "cantante": "Julieta Venegas",
    "cancion": "Andar contigo",
    "genero": "Pop Latino"
  },
  {
    "id": 272,
    "cantante": "Julieta Venegas",
    "cancion": "Eres para mi",
    "genero": "Pop Latino"
  },
  {
    "id": 273,
    "cantante": "Julieta Venegas",
    "cancion": "Me voy",
    "genero": "Pop Latino"
  },
  {
    "id": 274,
    "cantante": "Julio Melgar",
    "cancion": "creo en Ti",
    "genero": "Música Cristiana"
  },
  {
    "id": 275,
    "cantante": "Julio Melgar",
    "cancion": "Eres",
    "genero": "Música Cristiana"
  },
  {
    "id": 276,
    "cantante": "Julissa",
    "cancion": "el gran Yo soy",
    "genero": "Música Cristiana"
  },
  {
    "id": 277,
    "cantante": "Julissa",
    "cancion": "El no perecio",
    "genero": "Música Cristiana"
  },
  {
    "id": 278,
    "cantante": "Kapanga",
    "cancion": "El mono relojero",
    "genero": "Rock / Ska"
  },
  {
    "id": 279,
    "cantante": "Kapanga",
    "cancion": "El universal",
    "genero": "Rock / Ska"
  },
  {
    "id": 280,
    "cantante": "Kapanga",
    "cancion": "Me mata",
    "genero": "Rock / Ska"
  },
  {
    "id": 281,
    "cantante": "Kapanga",
    "cancion": "Ramon",
    "genero": "Rock / Ska"
  },
  {
    "id": 282,
    "cantante": "Kike Pavon",
    "cancion": "Empezar denuevo",
    "genero": "Variado / Pop"
  },
  {
    "id": 283,
    "cantante": "Kiss",
    "cancion": "I was made for loving you",
    "genero": "Variado / Pop"
  },
  {
    "id": 284,
    "cantante": "La 25",
    "cancion": "Solo voy",
    "genero": "Variado / Pop"
  },
  {
    "id": 285,
    "cantante": "La Base",
    "cancion": "Sabroson",
    "genero": "Cumbia Villera"
  },
  {
    "id": 286,
    "cantante": "La Base",
    "cancion": "Vienes y te vas",
    "genero": "Cumbia Villera"
  },
  {
    "id": 287,
    "cantante": "La Joven Guardia",
    "cancion": "El extraño de pelo largo",
    "genero": "Variado / Pop"
  },
  {
    "id": 288,
    "cantante": "La Ley",
    "cancion": "Aqui",
    "genero": "Variado / Pop"
  },
  {
    "id": 289,
    "cantante": "La Mosca",
    "cancion": "Muchachos",
    "genero": "Pop / Ska"
  },
  {
    "id": 290,
    "cantante": "La Mosca",
    "cancion": "Para no verte mas",
    "genero": "Pop / Ska"
  },
  {
    "id": 291,
    "cantante": "La Mosca",
    "cancion": "Yo te quiero dar",
    "genero": "Pop / Ska"
  },
  {
    "id": 292,
    "cantante": "La Oreja De Van Gogh",
    "cancion": "20 de enero",
    "genero": "Pop Latino"
  },
  {
    "id": 293,
    "cantante": "La Oreja De Van Gogh",
    "cancion": "Rosas",
    "genero": "Pop Latino"
  },
  {
    "id": 294,
    "cantante": "La Portuaria",
    "cancion": "Selva",
    "genero": "Variado / Pop"
  },
  {
    "id": 295,
    "cantante": "La Quinta Estacion",
    "cancion": "El sol no regresa",
    "genero": "Variado / Pop"
  },
  {
    "id": 296,
    "cantante": "La Renga",
    "cancion": "Cuando estes aqui",
    "genero": "Rock Nacional"
  },
  {
    "id": 297,
    "cantante": "La Renga",
    "cancion": "El revelde",
    "genero": "Rock Nacional"
  },
  {
    "id": 298,
    "cantante": "Las Ketchup",
    "cancion": "Asereje",
    "genero": "Variado / Pop"
  },
  {
    "id": 299,
    "cantante": "Las Pelotas",
    "cancion": "Sera",
    "genero": "Rock Nacional"
  },
  {
    "id": 300,
    "cantante": "Laura Pausini",
    "cancion": "Se fue",
    "genero": "Variado / Pop"
  },
  {
    "id": 301,
    "cantante": "Lazaro",
    "cancion": "Meu mestri",
    "genero": "Variado / Pop"
  },
  {
    "id": 302,
    "cantante": "Leo Mattioli",
    "cancion": "Tramposa y mentirosa",
    "genero": "Variado / Pop"
  },
  {
    "id": 303,
    "cantante": "Leon Gieco",
    "cancion": "En el pais de la libertad",
    "genero": "Rock / Folclore"
  },
  {
    "id": 304,
    "cantante": "Leon Gieco",
    "cancion": "Memoria",
    "genero": "Rock / Folclore"
  },
  {
    "id": 305,
    "cantante": "Leon Gieco",
    "cancion": "Ojo con los orosco",
    "genero": "Rock / Folclore"
  },
  {
    "id": 306,
    "cantante": "Lilo Y Stitch",
    "cancion": "Hawaiian roller coaster ride",
    "genero": "Infantil"
  },
  {
    "id": 307,
    "cantante": "Lilo Y Stitch",
    "cancion": "He mele no lino",
    "genero": "Infantil"
  },
  {
    "id": 308,
    "cantante": "Lily Goodman",
    "cancion": "Al final",
    "genero": "Variado / Pop"
  },
  {
    "id": 309,
    "cantante": "Little Baby Burn",
    "cancion": "La cancion del baño",
    "genero": "Variado / Pop"
  },
  {
    "id": 310,
    "cantante": "Litto Nedia",
    "cancion": "Solo se trata de vivir",
    "genero": "Variado / Pop"
  },
  {
    "id": 311,
    "cantante": "Locomia",
    "cancion": "Locomia",
    "genero": "Variado / Pop"
  },
  {
    "id": 312,
    "cantante": "Los Abuelos De La Nada",
    "cancion": "Lunes por la madrugada",
    "genero": "Variado / Pop"
  },
  {
    "id": 313,
    "cantante": "Los Angeles Azules",
    "cancion": "Como te voy a olvidar",
    "genero": "Variado / Pop"
  },
  {
    "id": 314,
    "cantante": "Los Autenticos Decadentes",
    "cancion": "Como me voy a olvidar",
    "genero": "Rock / Ska"
  },
  {
    "id": 315,
    "cantante": "Los Autenticos Decadentes",
    "cancion": "El murguero",
    "genero": "Rock / Ska"
  },
  {
    "id": 316,
    "cantante": "Los Autenticos Decadentes",
    "cancion": "El pajaro vio el cielo y se volo",
    "genero": "Rock / Ska"
  },
  {
    "id": 317,
    "cantante": "Los Autenticos Decadentes",
    "cancion": "No soy tu prisionero",
    "genero": "Rock / Ska"
  },
  {
    "id": 318,
    "cantante": "Los Autenticos Decadentes",
    "cancion": "Un osito de peluche de taiwan",
    "genero": "Rock / Ska"
  },
  {
    "id": 319,
    "cantante": "Los Autenticos Decadentes",
    "cancion": "Vivire por siempre",
    "genero": "Rock / Ska"
  },
  {
    "id": 320,
    "cantante": "Los Cafres",
    "cancion": "Bastara",
    "genero": "Variado / Pop"
  },
  {
    "id": 321,
    "cantante": "Los Cafres",
    "cancion": "Si el amor se cae",
    "genero": "Variado / Pop"
  },
  {
    "id": 322,
    "cantante": "Los Cantantes",
    "cancion": "El venao",
    "genero": "Variado / Pop"
  },
  {
    "id": 323,
    "cantante": "Los Enanitos Verdes",
    "cancion": "Igual que ayer",
    "genero": "Rock Nacional"
  },
  {
    "id": 324,
    "cantante": "Los Enanitos Verdes",
    "cancion": "Lamento boliviano",
    "genero": "Rock Nacional"
  },
  {
    "id": 325,
    "cantante": "Los Fabulosos Cadillacs",
    "cancion": "Carnaval toda la vida",
    "genero": "Rock / Ska"
  },
  {
    "id": 326,
    "cantante": "Los Fabulosos Cadillacs",
    "cancion": "Mal bicho",
    "genero": "Rock / Ska"
  },
  {
    "id": 327,
    "cantante": "Los Fabulosos Cadillacs",
    "cancion": "Siguiendo la luna",
    "genero": "Rock / Ska"
  },
  {
    "id": 328,
    "cantante": "Los Fantasmas Del Caribe",
    "cancion": "Muchacha triste",
    "genero": "Variado / Pop"
  },
  {
    "id": 329,
    "cantante": "Los Lunes",
    "cancion": "Una cancion de despedida",
    "genero": "Variado / Pop"
  },
  {
    "id": 330,
    "cantante": "Los Palmeras",
    "cancion": "Bombon asesino",
    "genero": "Cumbia"
  },
  {
    "id": 331,
    "cantante": "Los Palmeras",
    "cancion": "Olvidala",
    "genero": "Cumbia"
  },
  {
    "id": 332,
    "cantante": "Los Pericos",
    "cancion": "Home sweet home",
    "genero": "Reggae"
  },
  {
    "id": 333,
    "cantante": "Los Pericos",
    "cancion": "Mucha experiencia",
    "genero": "Reggae"
  },
  {
    "id": 334,
    "cantante": "Los Pericos",
    "cancion": "Nada que perder",
    "genero": "Reggae"
  },
  {
    "id": 335,
    "cantante": "Los Pericos",
    "cancion": "Runaway",
    "genero": "Reggae"
  },
  {
    "id": 336,
    "cantante": "Los Pericos",
    "cancion": "Waitin",
    "genero": "Reggae"
  },
  {
    "id": 337,
    "cantante": "Los Perros",
    "cancion": "Bajo la rambla",
    "genero": "Variado / Pop"
  },
  {
    "id": 338,
    "cantante": "Los Piojos",
    "cancion": "Ando ganas",
    "genero": "Rock Nacional"
  },
  {
    "id": 339,
    "cantante": "Los Piojos",
    "cancion": "Bicho de ciudad",
    "genero": "Rock Nacional"
  },
  {
    "id": 340,
    "cantante": "Los Piojos",
    "cancion": "Como ali",
    "genero": "Rock Nacional"
  },
  {
    "id": 341,
    "cantante": "Los Piojos",
    "cancion": "Marado",
    "genero": "Rock Nacional"
  },
  {
    "id": 342,
    "cantante": "Los Piojos",
    "cancion": "Ruleta",
    "genero": "Rock Nacional"
  },
  {
    "id": 343,
    "cantante": "Los Piojos",
    "cancion": "Vine hasta aqui",
    "genero": "Rock Nacional"
  },
  {
    "id": 344,
    "cantante": "Los Rancheros",
    "cancion": "Casualidad",
    "genero": "Rock Nacional"
  },
  {
    "id": 345,
    "cantante": "Los Rancheros",
    "cancion": "Sin solucion",
    "genero": "Rock Nacional"
  },
  {
    "id": 346,
    "cantante": "Los Redondos",
    "cancion": "Angel de la soledad",
    "genero": "Rock Nacional"
  },
  {
    "id": 347,
    "cantante": "Los Redondos",
    "cancion": "Aquella solitaria vaca",
    "genero": "Rock Nacional"
  },
  {
    "id": 348,
    "cantante": "Los Redondos",
    "cancion": "El pibe de los astilleros",
    "genero": "Rock Nacional"
  },
  {
    "id": 349,
    "cantante": "Los Redondos",
    "cancion": "Ji ji ji",
    "genero": "Rock Nacional"
  },
  {
    "id": 350,
    "cantante": "Los Redondos",
    "cancion": "La bestia pop",
    "genero": "Rock Nacional"
  },
  {
    "id": 351,
    "cantante": "Los Redondos",
    "cancion": "La hija del fletero",
    "genero": "Rock Nacional"
  },
  {
    "id": 352,
    "cantante": "Los Redondos",
    "cancion": "Mariposa pontiac",
    "genero": "Rock Nacional"
  },
  {
    "id": 353,
    "cantante": "Los Redondos",
    "cancion": "Masacre en el puticlub",
    "genero": "Rock Nacional"
  },
  {
    "id": 354,
    "cantante": "Los Redondos",
    "cancion": "Me matan limon",
    "genero": "Rock Nacional"
  },
  {
    "id": 355,
    "cantante": "Los Redondos",
    "cancion": "Mi perro dinamita",
    "genero": "Rock Nacional"
  },
  {
    "id": 356,
    "cantante": "Los Redondos",
    "cancion": "Motor psico",
    "genero": "Rock Nacional"
  },
  {
    "id": 357,
    "cantante": "Los Redondos",
    "cancion": "Musica para pastillas",
    "genero": "Rock Nacional"
  },
  {
    "id": 358,
    "cantante": "Los Redondos",
    "cancion": "Queso ruso",
    "genero": "Rock Nacional"
  },
  {
    "id": 359,
    "cantante": "Los Redondos",
    "cancion": "Rock para el negro atila",
    "genero": "Rock Nacional"
  },
  {
    "id": 360,
    "cantante": "Los Redondos",
    "cancion": "Tarea fina",
    "genero": "Rock Nacional"
  },
  {
    "id": 361,
    "cantante": "Los Redondos",
    "cancion": "Todo un palo",
    "genero": "Rock Nacional"
  },
  {
    "id": 362,
    "cantante": "Los Redondos",
    "cancion": "Un poco de amor frances",
    "genero": "Rock Nacional"
  },
  {
    "id": 363,
    "cantante": "Los Redondos",
    "cancion": "Vencedores vencidos",
    "genero": "Rock Nacional"
  },
  {
    "id": 364,
    "cantante": "Los Rodriguez",
    "cancion": "Diez años despues",
    "genero": "Rock Nacional"
  },
  {
    "id": 365,
    "cantante": "Los Rodriguez",
    "cancion": "Dulce condena",
    "genero": "Rock Nacional"
  },
  {
    "id": 366,
    "cantante": "Los Rodriguez",
    "cancion": "Mi enfermedad",
    "genero": "Rock Nacional"
  },
  {
    "id": 367,
    "cantante": "Los Rodriguez",
    "cancion": "Mi enfermedad",
    "genero": "Rock Nacional"
  },
  {
    "id": 368,
    "cantante": "Los Rodriguez",
    "cancion": "Sin documento",
    "genero": "Rock Nacional"
  },
  {
    "id": 369,
    "cantante": "Los Rodriguez",
    "cancion": "Sin documento",
    "genero": "Rock Nacional"
  },
  {
    "id": 370,
    "cantante": "Los Tipitos",
    "cancion": "Brujeria",
    "genero": "Rock / Pop"
  },
  {
    "id": 371,
    "cantante": "Luli Pampin",
    "cancion": "Abecedario",
    "genero": "Infantil"
  },
  {
    "id": 372,
    "cantante": "Luli Pampin",
    "cancion": "Camino por el bosque",
    "genero": "Infantil"
  },
  {
    "id": 373,
    "cantante": "Luli Pampin",
    "cancion": "Camino por la selva",
    "genero": "Infantil"
  },
  {
    "id": 374,
    "cantante": "Luli Pampin",
    "cancion": "Congelado",
    "genero": "Infantil"
  },
  {
    "id": 375,
    "cantante": "Luz Mala",
    "cancion": "Abri la puerta",
    "genero": "Variado / Pop"
  },
  {
    "id": 376,
    "cantante": "Machito Ponce",
    "cancion": "Plastica",
    "genero": "Dance / Pop"
  },
  {
    "id": 377,
    "cantante": "Machito Ponce",
    "cancion": "Samanta",
    "genero": "Dance / Pop"
  },
  {
    "id": 378,
    "cantante": "Madonna",
    "cancion": "La isla bonita",
    "genero": "Pop"
  },
  {
    "id": 379,
    "cantante": "Madonna",
    "cancion": "Like a prayer",
    "genero": "Pop"
  },
  {
    "id": 380,
    "cantante": "Magneto",
    "cancion": "Vuela vuela",
    "genero": "Variado / Pop"
  },
  {
    "id": 381,
    "cantante": "Makano",
    "cancion": "Te amo",
    "genero": "Variado / Pop"
  },
  {
    "id": 382,
    "cantante": "Mambru",
    "cancion": "A veces",
    "genero": "Variado / Pop"
  },
  {
    "id": 383,
    "cantante": "Man Ray",
    "cancion": "Caribe sur",
    "genero": "Variado / Pop"
  },
  {
    "id": 384,
    "cantante": "Mana",
    "cancion": "El muelle de san blas",
    "genero": "Pop Rock Latino"
  },
  {
    "id": 385,
    "cantante": "Mana",
    "cancion": "Rayando el sol",
    "genero": "Pop Rock Latino"
  },
  {
    "id": 386,
    "cantante": "Mancha De Rolando",
    "cancion": "Arde la ciudad",
    "genero": "Rock Nacional"
  },
  {
    "id": 387,
    "cantante": "Manuel Wizt",
    "cancion": "Hoy te necesito",
    "genero": "Variado / Pop"
  },
  {
    "id": 388,
    "cantante": "Marc Antony",
    "cancion": "Vivir la vida",
    "genero": "Variado / Pop"
  },
  {
    "id": 389,
    "cantante": "Marcela Gandara",
    "cancion": "Contigo quiero caminar",
    "genero": "Música Cristiana"
  },
  {
    "id": 390,
    "cantante": "Marcela Gandara",
    "cancion": "El mismo cielo",
    "genero": "Música Cristiana"
  },
  {
    "id": 391,
    "cantante": "Marcela Gandara",
    "cancion": "Supe que me amabas",
    "genero": "Música Cristiana"
  },
  {
    "id": 392,
    "cantante": "Marcela Gandara",
    "cancion": "Un viaje largo",
    "genero": "Música Cristiana"
  },
  {
    "id": 393,
    "cantante": "Marcela Morelo",
    "cancion": "Corazon salvaje",
    "genero": "Pop Latino"
  },
  {
    "id": 394,
    "cantante": "Marcela Morelo",
    "cancion": "La fuerza del engaño",
    "genero": "Pop Latino"
  },
  {
    "id": 395,
    "cantante": "Marcos Barrientos",
    "cancion": "no hay nadie como Tu",
    "genero": "Variado / Pop"
  },
  {
    "id": 396,
    "cantante": "Marcos Brunet",
    "cancion": "Dialogo intimo",
    "genero": "Música Cristiana"
  },
  {
    "id": 397,
    "cantante": "Marcos Brunet",
    "cancion": "Dialogo intimo 2",
    "genero": "Música Cristiana"
  },
  {
    "id": 398,
    "cantante": "Marcos Brunet",
    "cancion": "Hogar dulce hogar",
    "genero": "Música Cristiana"
  },
  {
    "id": 399,
    "cantante": "Marcos Brunet",
    "cancion": "Jeremias",
    "genero": "Música Cristiana"
  },
  {
    "id": 400,
    "cantante": "Marcos Brunet",
    "cancion": "Samuel",
    "genero": "Música Cristiana"
  },
  {
    "id": 401,
    "cantante": "Marcos Brunet",
    "cancion": "si te tengo a Ti",
    "genero": "Música Cristiana"
  },
  {
    "id": 402,
    "cantante": "Marcos Brunet",
    "cancion": "Uniendo cielo y tierra",
    "genero": "Música Cristiana"
  },
  {
    "id": 403,
    "cantante": "Marcos Witt",
    "cancion": "Gracias",
    "genero": "Música Cristiana"
  },
  {
    "id": 404,
    "cantante": "Marcos Witt",
    "cancion": "Temprano yo te buscare",
    "genero": "Música Cristiana"
  },
  {
    "id": 405,
    "cantante": "Marcos Witt",
    "cancion": "Tu fidelidad",
    "genero": "Música Cristiana"
  },
  {
    "id": 406,
    "cantante": "Marcos Witt",
    "cancion": "Yo te busco",
    "genero": "Música Cristiana"
  },
  {
    "id": 407,
    "cantante": "Marcos Yaroide",
    "cancion": "todo se lo debo a El",
    "genero": "Variado / Pop"
  },
  {
    "id": 408,
    "cantante": "Memphis La Brusela",
    "cancion": "La ultima lagrima",
    "genero": "Variado / Pop"
  },
  {
    "id": 409,
    "cantante": "Michael Jackson",
    "cancion": "Beat it",
    "genero": "Pop / Funk"
  },
  {
    "id": 410,
    "cantante": "Michael Jackson",
    "cancion": "Billie jean",
    "genero": "Pop / Funk"
  },
  {
    "id": 411,
    "cantante": "Michael Jackson",
    "cancion": "Black or white",
    "genero": "Pop / Funk"
  },
  {
    "id": 412,
    "cantante": "Michael Jackson",
    "cancion": "We are the world",
    "genero": "Pop / Funk"
  },
  {
    "id": 413,
    "cantante": "Miel San Marcos",
    "cancion": "amamos Tu presencia",
    "genero": "Música Cristiana"
  },
  {
    "id": 414,
    "cantante": "Miel San Marcos",
    "cancion": "Glorificate",
    "genero": "Música Cristiana"
  },
  {
    "id": 415,
    "cantante": "Miel San Marcos",
    "cancion": "No hay lugar mas alto",
    "genero": "Música Cristiana"
  },
  {
    "id": 416,
    "cantante": "Minecraft",
    "cancion": "A tantos bloques de mi",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 417,
    "cantante": "Minecraft",
    "cancion": "Amigos a distancia",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 418,
    "cantante": "Minecraft",
    "cancion": "Boom boom",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 419,
    "cantante": "Minecraft",
    "cancion": "Bye bye",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 420,
    "cantante": "Minecraft",
    "cancion": "Chipi chapa",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 421,
    "cantante": "Minecraft",
    "cancion": "Cuando se apaga la pc",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 422,
    "cantante": "Minecraft",
    "cancion": "Los del pueblo",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 423,
    "cantante": "Minecraft",
    "cancion": "Otra placa",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 424,
    "cantante": "Minecraft",
    "cancion": "Picandote",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 425,
    "cantante": "Minecraft",
    "cancion": "Yo soy tu chuymay",
    "genero": "Infantil / Bandas Sonoras"
  },
  {
    "id": 426,
    "cantante": "Minions",
    "cancion": "Banana",
    "genero": "Infantil"
  },
  {
    "id": 427,
    "cantante": "Minions",
    "cancion": "The rise of gru",
    "genero": "Infantil"
  },
  {
    "id": 428,
    "cantante": "Miranda",
    "cancion": "Don",
    "genero": "Pop / Electropop"
  },
  {
    "id": 429,
    "cantante": "Miranda",
    "cancion": "Perfecta",
    "genero": "Pop / Electropop"
  },
  {
    "id": 430,
    "cantante": "Miranda",
    "cancion": "Prisionero",
    "genero": "Pop / Electropop"
  },
  {
    "id": 431,
    "cantante": "Miranda",
    "cancion": "Traicion",
    "genero": "Pop / Electropop"
  },
  {
    "id": 432,
    "cantante": "Miranda",
    "cancion": "Yo te dire",
    "genero": "Pop / Electropop"
  },
  {
    "id": 433,
    "cantante": "Moonies",
    "cancion": "Osito gominola",
    "genero": "Infantil"
  },
  {
    "id": 434,
    "cantante": "Moonies",
    "cancion": "Pepas",
    "genero": "Infantil"
  },
  {
    "id": 435,
    "cantante": "Nancy Amancio",
    "cancion": "Corazon de guerrera",
    "genero": "Música Cristiana"
  },
  {
    "id": 436,
    "cantante": "Nancy Amancio",
    "cancion": "El proceso",
    "genero": "Música Cristiana"
  },
  {
    "id": 437,
    "cantante": "Nancy Amancio",
    "cancion": "Mujer de destino",
    "genero": "Música Cristiana"
  },
  {
    "id": 438,
    "cantante": "Nestor",
    "cancion": "Una calle nos separa",
    "genero": "Variado / Pop"
  },
  {
    "id": 439,
    "cantante": "New Wine",
    "cancion": "aquel que esta en Su trono",
    "genero": "Música Cristiana"
  },
  {
    "id": 440,
    "cantante": "New Wine",
    "cancion": "Eres mi paz",
    "genero": "Música Cristiana"
  },
  {
    "id": 441,
    "cantante": "New Wine",
    "cancion": "Libre para adorar",
    "genero": "Música Cristiana"
  },
  {
    "id": 442,
    "cantante": "New Wine",
    "cancion": "llevame a Tu presencia",
    "genero": "Música Cristiana"
  },
  {
    "id": 443,
    "cantante": "New Wine",
    "cancion": "Tu reino esta aqui",
    "genero": "Música Cristiana"
  },
  {
    "id": 444,
    "cantante": "Nino Bravo",
    "cancion": "Un beso y una flor",
    "genero": "Variado / Pop"
  },
  {
    "id": 445,
    "cantante": "Nirvana",
    "cancion": "Smells like teen spirit",
    "genero": "Grunge / Rock"
  },
  {
    "id": 446,
    "cantante": "Oasis",
    "cancion": "Wanderwall",
    "genero": "Variado / Pop"
  },
  {
    "id": 447,
    "cantante": "Opus",
    "cancion": "Life is life",
    "genero": "Música Cristiana"
  },
  {
    "id": 448,
    "cantante": "Osito Gominola",
    "cancion": "Osito gominola",
    "genero": "Variado / Pop"
  },
  {
    "id": 449,
    "cantante": "Patricia Sosa",
    "cancion": "Aprender a volar",
    "genero": "Balada / Rock"
  },
  {
    "id": 450,
    "cantante": "Patricia Sosa",
    "cancion": "Enculzame los oidos",
    "genero": "Balada / Rock"
  },
  {
    "id": 451,
    "cantante": "Paul Mc Cartney",
    "cancion": "Hope of deliverance",
    "genero": "Variado / Pop"
  },
  {
    "id": 452,
    "cantante": "Paul Young",
    "cancion": "Every time you go away",
    "genero": "Variado / Pop"
  },
  {
    "id": 453,
    "cantante": "Paulina Rubio",
    "cancion": "Yo no soy esa mujer",
    "genero": "Pop Latino"
  },
  {
    "id": 454,
    "cantante": "Paw Patrol",
    "cancion": "Funeral",
    "genero": "Variado / Pop"
  },
  {
    "id": 455,
    "cantante": "Pet Shop Boys",
    "cancion": "Dominio dance",
    "genero": "Variado / Pop"
  },
  {
    "id": 456,
    "cantante": "Phil Collins",
    "cancion": "Another day in paradise",
    "genero": "Variado / Pop"
  },
  {
    "id": 457,
    "cantante": "Pink Floyd",
    "cancion": "Another brick in the wall",
    "genero": "Variado / Pop"
  },
  {
    "id": 458,
    "cantante": "Proyecto Uno",
    "cancion": "Tiburon",
    "genero": "Variado / Pop"
  },
  {
    "id": 459,
    "cantante": "Queen",
    "cancion": "I want to break free",
    "genero": "Rock"
  },
  {
    "id": 460,
    "cantante": "Queen",
    "cancion": "Love of my life",
    "genero": "Rock"
  },
  {
    "id": 461,
    "cantante": "Queen",
    "cancion": "Radio gaga",
    "genero": "Rock"
  },
  {
    "id": 462,
    "cantante": "Queen",
    "cancion": "Show must go on",
    "genero": "Rock"
  },
  {
    "id": 463,
    "cantante": "Rabito",
    "cancion": "un pacto con Dios",
    "genero": "Música Cristiana"
  },
  {
    "id": 464,
    "cantante": "Rafaga",
    "cancion": "Aguita",
    "genero": "Cumbia"
  },
  {
    "id": 465,
    "cantante": "Rafaga",
    "cancion": "Mentirosa",
    "genero": "Cumbia"
  },
  {
    "id": 466,
    "cantante": "Rata Blanca",
    "cancion": "La leyenda del hada y el mago",
    "genero": "Hard Rock"
  },
  {
    "id": 467,
    "cantante": "Rata Blanca",
    "cancion": "Mujer amante",
    "genero": "Hard Rock"
  },
  {
    "id": 468,
    "cantante": "Rata Blanca",
    "cancion": "Reino olvidado",
    "genero": "Hard Rock"
  },
  {
    "id": 469,
    "cantante": "Redimi2",
    "cancion": "Yo sere tu sol",
    "genero": "Música Cristiana"
  },
  {
    "id": 470,
    "cantante": "Redimidos",
    "cancion": "Yo sere tu sol",
    "genero": "Variado / Pop"
  },
  {
    "id": 471,
    "cantante": "Reik",
    "cancion": "Noviembre",
    "genero": "Pop Latino"
  },
  {
    "id": 472,
    "cantante": "Rem",
    "cancion": "Losing my religion",
    "genero": "Alternative Rock"
  },
  {
    "id": 473,
    "cantante": "Rem",
    "cancion": "Shiny happy people",
    "genero": "Alternative Rock"
  },
  {
    "id": 474,
    "cantante": "Repandilla",
    "cancion": "El reloj cucu",
    "genero": "Variado / Pop"
  },
  {
    "id": 475,
    "cantante": "Repiola",
    "cancion": "No me vuelvo a enamorar",
    "genero": "Variado / Pop"
  },
  {
    "id": 476,
    "cantante": "Rescate",
    "cancion": "Mala memoria",
    "genero": "Música Cristiana / Rock"
  },
  {
    "id": 477,
    "cantante": "Rescate",
    "cancion": "Quitamancha",
    "genero": "Música Cristiana / Rock"
  },
  {
    "id": 478,
    "cantante": "Rescate",
    "cancion": "Soy jose",
    "genero": "Música Cristiana / Rock"
  },
  {
    "id": 479,
    "cantante": "Rey De Reyes",
    "cancion": "atraeme a Ti",
    "genero": "Música Cristiana"
  },
  {
    "id": 480,
    "cantante": "Rey De Reyes",
    "cancion": "Este es mi deseo",
    "genero": "Música Cristiana"
  },
  {
    "id": 481,
    "cantante": "Rey De Reyes",
    "cancion": "Haz llover",
    "genero": "Música Cristiana"
  },
  {
    "id": 482,
    "cantante": "Rey De Reyes",
    "cancion": "Majestad",
    "genero": "Música Cristiana"
  },
  {
    "id": 483,
    "cantante": "Ricardo Arjona",
    "cancion": "Cuando",
    "genero": "Balada / Pop"
  },
  {
    "id": 484,
    "cantante": "Ricardo Arjona",
    "cancion": "El problema",
    "genero": "Balada / Pop"
  },
  {
    "id": 485,
    "cantante": "Ricardo Arjona",
    "cancion": "Ella y el",
    "genero": "Balada / Pop"
  },
  {
    "id": 486,
    "cantante": "Ricardo Arjona",
    "cancion": "Historia de taxi",
    "genero": "Balada / Pop"
  },
  {
    "id": 487,
    "cantante": "Ricardo Arjona",
    "cancion": "Jesus verbo no sustantivo",
    "genero": "Balada / Pop"
  },
  {
    "id": 488,
    "cantante": "Ricardo Arjona",
    "cancion": "Si el norte fuera el sur",
    "genero": "Balada / Pop"
  },
  {
    "id": 489,
    "cantante": "Ricardo Arjona",
    "cancion": "Te enamoraste de ti",
    "genero": "Balada / Pop"
  },
  {
    "id": 490,
    "cantante": "Ricardo Montaner",
    "cancion": "Dejame llorar",
    "genero": "Balada / Pop"
  },
  {
    "id": 491,
    "cantante": "Ricardo Montaner",
    "cancion": "Me va a extrañar",
    "genero": "Balada / Pop"
  },
  {
    "id": 492,
    "cantante": "Ricardo Montaner",
    "cancion": "Tan enamorados",
    "genero": "Balada / Pop"
  },
  {
    "id": 493,
    "cantante": "Robbie Williams",
    "cancion": "Feel",
    "genero": "Música Cristiana"
  },
  {
    "id": 494,
    "cantante": "Roberto Orellana",
    "cancion": "Yo tengo un nuevo amor",
    "genero": "Variado / Pop"
  },
  {
    "id": 495,
    "cantante": "Rodrigo",
    "cancion": "Amor clasificado",
    "genero": "Cuarteto"
  },
  {
    "id": 496,
    "cantante": "Rojo",
    "cancion": "No me soltaras",
    "genero": "Variado / Pop"
  },
  {
    "id": 497,
    "cantante": "Romeo Santo",
    "cancion": "El farsante",
    "genero": "Bachata"
  },
  {
    "id": 498,
    "cantante": "Romeo Santo",
    "cancion": "Eres mia",
    "genero": "Bachata"
  },
  {
    "id": 499,
    "cantante": "Roque Narvaja",
    "cancion": "Menta y limon",
    "genero": "Rock / Pop"
  },
  {
    "id": 500,
    "cantante": "Roque Narvaja",
    "cancion": "Ni una palabra",
    "genero": "Rock / Pop"
  },
  {
    "id": 501,
    "cantante": "Roque Narvaja",
    "cancion": "Yo queria ser mayor",
    "genero": "Rock / Pop"
  },
  {
    "id": 502,
    "cantante": "Rosana",
    "cancion": "Si tu no estas aqui",
    "genero": "Variado / Pop"
  },
  {
    "id": 503,
    "cantante": "Roxette",
    "cancion": "I must have been love",
    "genero": "Pop Rock"
  },
  {
    "id": 504,
    "cantante": "Samuel Hernandez",
    "cancion": "Dios siempre tiene el control",
    "genero": "Música Cristiana"
  },
  {
    "id": 505,
    "cantante": "Samuel Hernandez",
    "cancion": "Levanto mis manos",
    "genero": "Música Cristiana"
  },
  {
    "id": 506,
    "cantante": "Samuel Hernandez",
    "cancion": "Sacame el pie de encima",
    "genero": "Música Cristiana"
  },
  {
    "id": 507,
    "cantante": "Samuel Hernandez",
    "cancion": "si le crees a Dios",
    "genero": "Música Cristiana"
  },
  {
    "id": 508,
    "cantante": "Scorpions",
    "cancion": "Wing of change",
    "genero": "Variado / Pop"
  },
  {
    "id": 509,
    "cantante": "Seal",
    "cancion": "Kiss from a roses",
    "genero": "Variado / Pop"
  },
  {
    "id": 510,
    "cantante": "Sergio El Lobizon Del Oeste",
    "cancion": "Marta",
    "genero": "Variado / Pop"
  },
  {
    "id": 511,
    "cantante": "Seth Condney",
    "cancion": "El nos ama",
    "genero": "Variado / Pop"
  },
  {
    "id": 512,
    "cantante": "Shaggy",
    "cancion": "Angel",
    "genero": "Variado / Pop"
  },
  {
    "id": 513,
    "cantante": "Shakira",
    "cancion": "Estoy aqui",
    "genero": "Pop Latino"
  },
  {
    "id": 514,
    "cantante": "Shakira",
    "cancion": "Inevitable",
    "genero": "Pop Latino"
  },
  {
    "id": 515,
    "cantante": "Shakira",
    "cancion": "Try everything",
    "genero": "Pop Latino"
  },
  {
    "id": 516,
    "cantante": "Shakira",
    "cancion": "Waka waka",
    "genero": "Pop Latino"
  },
  {
    "id": 517,
    "cantante": "Shrek",
    "cancion": "Intro",
    "genero": "Variado / Pop"
  },
  {
    "id": 518,
    "cantante": "Sin Bandera",
    "cancion": "Mientes tan bien",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 519,
    "cantante": "Skay Beilinson",
    "cancion": "Oda a la sin nombre",
    "genero": "Variado / Pop"
  },
  {
    "id": 520,
    "cantante": "Soda Stereo",
    "cancion": "De musica ligera",
    "genero": "Rock Nacional"
  },
  {
    "id": 521,
    "cantante": "Soda Stereo",
    "cancion": "Nada personal",
    "genero": "Rock Nacional"
  },
  {
    "id": 522,
    "cantante": "Soda Stereo",
    "cancion": "Tratame suavemente",
    "genero": "Rock Nacional"
  },
  {
    "id": 523,
    "cantante": "Solcito",
    "cancion": "Soy una taza",
    "genero": "Variado / Pop"
  },
  {
    "id": 524,
    "cantante": "Soledad",
    "cancion": "Tren del cielo",
    "genero": "Variado / Pop"
  },
  {
    "id": 525,
    "cantante": "Spinetta",
    "cancion": "Seguir viviendo sin tu amor",
    "genero": "Variado / Pop"
  },
  {
    "id": 526,
    "cantante": "Starship",
    "cancion": "Nothing s gonna stop us now",
    "genero": "Variado / Pop"
  },
  {
    "id": 527,
    "cantante": "Stevie Wonder",
    "cancion": "I just called to say",
    "genero": "Variado / Pop"
  },
  {
    "id": 528,
    "cantante": "Survivor",
    "cancion": "Eye of the tiger",
    "genero": "Variado / Pop"
  },
  {
    "id": 529,
    "cantante": "Tango Feroz",
    "cancion": "El amor es mas fuerte",
    "genero": "Rock Nacional"
  },
  {
    "id": 530,
    "cantante": "Tango Feroz",
    "cancion": "El oso",
    "genero": "Rock Nacional"
  },
  {
    "id": 531,
    "cantante": "Tango Feroz",
    "cancion": "Presente",
    "genero": "Rock Nacional"
  },
  {
    "id": 532,
    "cantante": "Tayo",
    "cancion": "Los valientes coches",
    "genero": "Variado / Pop"
  },
  {
    "id": 533,
    "cantante": "Tercer Cielo",
    "cancion": "Creere",
    "genero": "Música Cristiana"
  },
  {
    "id": 534,
    "cantante": "Tercer Cielo",
    "cancion": "Demente",
    "genero": "Música Cristiana"
  },
  {
    "id": 535,
    "cantante": "The Beatles",
    "cancion": "Here comes the sun",
    "genero": "Rock / Pop"
  },
  {
    "id": 536,
    "cantante": "The Beatles",
    "cancion": "Hey jude",
    "genero": "Rock / Pop"
  },
  {
    "id": 537,
    "cantante": "The Beatles",
    "cancion": "Oladi olada",
    "genero": "Rock / Pop"
  },
  {
    "id": 538,
    "cantante": "The Black Eyes Peas",
    "cancion": "Where is the love",
    "genero": "Variado / Pop"
  },
  {
    "id": 539,
    "cantante": "The Cranberries",
    "cancion": "Zombie",
    "genero": "Variado / Pop"
  },
  {
    "id": 540,
    "cantante": "The Offspring",
    "cancion": "Want to bad",
    "genero": "Punk Rock"
  },
  {
    "id": 541,
    "cantante": "The Offspring",
    "cancion": "Why don t you get a job",
    "genero": "Punk Rock"
  },
  {
    "id": 542,
    "cantante": "The Police",
    "cancion": "Every break you take",
    "genero": "Variado / Pop"
  },
  {
    "id": 543,
    "cantante": "The Verve Biter",
    "cancion": "Sweet symphony",
    "genero": "Variado / Pop"
  },
  {
    "id": 544,
    "cantante": "Tipitos",
    "cancion": "Silencio",
    "genero": "Variado / Pop"
  },
  {
    "id": 545,
    "cantante": "Tony Canario",
    "cancion": "Papa americano",
    "genero": "Variado / Pop"
  },
  {
    "id": 546,
    "cantante": "Toto",
    "cancion": "Africa",
    "genero": "Variado / Pop"
  },
  {
    "id": 547,
    "cantante": "Tracy Chapman",
    "cancion": "baby can I hold you",
    "genero": "Variado / Pop"
  },
  {
    "id": 548,
    "cantante": "Turf",
    "cancion": "Pasos al costado",
    "genero": "Variado / Pop"
  },
  {
    "id": 549,
    "cantante": "Ub40",
    "cancion": "Red red wine",
    "genero": "Variado / Pop"
  },
  {
    "id": 550,
    "cantante": "Uncion Tropical",
    "cancion": "El no perecio",
    "genero": "Cumbia Cristiana"
  },
  {
    "id": 551,
    "cantante": "Uncion Tropical",
    "cancion": "Mi nuevo amor",
    "genero": "Cumbia Cristiana"
  },
  {
    "id": 552,
    "cantante": "Vengaboys",
    "cancion": "Shalala lala",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 553,
    "cantante": "Vengaboys",
    "cancion": "We re going to ibiza",
    "genero": "Pop / Eurodance"
  },
  {
    "id": 554,
    "cantante": "Verano Del 98",
    "cancion": "Quien es",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 555,
    "cantante": "Verano Del 98",
    "cancion": "Sin querer",
    "genero": "Electrónica / New Age"
  },
  {
    "id": 556,
    "cantante": "Vicentico",
    "cancion": "No te apartes de mi",
    "genero": "Variado / Pop"
  },
  {
    "id": 557,
    "cantante": "Vico C",
    "cancion": "Lo grande que es perdonar",
    "genero": "Variado / Pop"
  },
  {
    "id": 558,
    "cantante": "Vico C",
    "cancion": "Mala hierva",
    "genero": "Variado / Pop"
  },
  {
    "id": 559,
    "cantante": "Viejas Locas",
    "cancion": "Homero",
    "genero": "Rock Nacional"
  },
  {
    "id": 560,
    "cantante": "Villanos",
    "cancion": "Chau corazon",
    "genero": "Variado / Pop"
  },
  {
    "id": 561,
    "cantante": "Vilma Palma Y Vampiros",
    "cancion": "Auto rojo",
    "genero": "Pop Rock"
  },
  {
    "id": 562,
    "cantante": "Vilma Palma Y Vampiros",
    "cancion": "Bye bye",
    "genero": "Pop Rock"
  },
  {
    "id": 563,
    "cantante": "Vilma Palma Y Vampiros",
    "cancion": "La pachanga",
    "genero": "Pop Rock"
  },
  {
    "id": 564,
    "cantante": "Volcan",
    "cancion": "Esa malvada",
    "genero": "Cumbia"
  },
  {
    "id": 565,
    "cantante": "Walter Olmos",
    "cancion": "Por lo que yo te quiero",
    "genero": "Cuarteto"
  },
  {
    "id": 566,
    "cantante": "Way Maker",
    "cancion": "Aqui estas",
    "genero": "Música Cristiana"
  },
  {
    "id": 567,
    "cantante": "Wham",
    "cancion": "Wake me up",
    "genero": "Pop"
  },
  {
    "id": 568,
    "cantante": "Yaki Da",
    "cancion": "I saw you dancing",
    "genero": "Pop / Dance"
  },
  {
    "id": 569,
    "cantante": "Zimbawe",
    "cancion": "Traicion a la mexicana",
    "genero": "Reggae"
  },
  {
    "id": 570,
    "cantante": "Zimbawe",
    "cancion": "Verano del 57",
    "genero": "Reggae"
  }
];