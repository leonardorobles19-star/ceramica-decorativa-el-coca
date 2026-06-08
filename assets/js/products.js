/**
 * CATÁLOGO DE PRODUCTOS — Cerámica Decorativa
 *
 * Cómo agregar un nuevo producto:
 * 1. Copia un objeto del array y pégalo al final (o en la categoría que corresponda).
 * 2. Asigna un id único (número consecutivo).
 * 3. Completa: nombre, descripcion, categoria, tamano, disponible, imagenes, medidas.
 * 4. Crea la carpeta assets/images/productoN/ y añade fotos numeradas (1.jpg, 2.jpg...).
 *    En imagenes usa rutas completas, ej: "assets/images/producto17/1.jpg"
 * 5. Categorías válidas: "figura" | "personaje" | "animal" | "llavero" | "adorno"
 * 6. Tamaños válidos: "pequeño" | "mediano" | "grande"
 * 7. Guarda el archivo — el catálogo se actualiza automáticamente al recargar la página.
 */

const products = [
  {
    id: 1,
    nombre: 'Juego de cucharas vacas',
    descripcion: 'Set de cucharas decorativas con vacas pintadas a mano y protegidas con resina para un acabado duradero.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto1/1.jpg',
                'assets/images/producto1/2.jpg',
                'assets/images/producto1/3.jpg',
                'assets/images/producto1/4.jpg'
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 2,
    nombre: 'Alcancía Club Futbol',
    descripcion: 'Alcancía con temática de fútbol pintada a mano y sellada con resina protectora.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto2/1.jpg'
                ,'assets/images/producto2/2.jpg'
                ,'assets/images/producto2/3.jpg'
                ,'assets/images/producto2/4.jpg'
                
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 3,
    nombre: 'Alcancía Angela',
    descripcion: 'Alcancía decorativa pintada a mano con delicados detalles protegidos por capa de resina.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto3/1.jpg'
                ,'assets/images/producto3/2.jpg'
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 4,
    nombre: 'Juego de cucharas vaca',
    descripcion: 'Juego de cucharas con diseño de vaca pintado a mano y protegido con resina.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto4/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 5,
    nombre: 'Juego de cucharas vacas',
    descripcion: 'Set de cucharas con vacas pintadas a mano, cada pieza sellada con resina transparente.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto5/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 6,
    nombre: 'Pareja de loros',
    descripcion: 'Figura de pareja de loros pintada a mano con resina protectora que realza los colores vibrantes.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto6/1.jpg'
                ,'assets/images/producto6/2.jpg'
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 7,
    nombre: 'Juego de Patos',
    descripcion: 'Conjunto de patos decorativos pintados a mano y sellados con resina para mayor resistencia.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto7/1.jpg'
                ,'assets/images/producto7/2.jpg'
                ,'assets/images/producto7/3.jpg'
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 8,
    nombre: 'Alcancía de Perrita',
    descripcion: 'Alcancía en forma de perrita pintada a mano con capa de resina protectora.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto8/1.jpg'
                ,'assets/images/producto8/2.jpg'
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 9,
    nombre: 'Centro de mesa',
    descripcion: 'Centro de mesa decorativo pintado a mano y protegido con resina para mantener su brillo.',
    categoria: 'adorno',
    tamano: 'grande',
    disponible: false,
    imagenes: ['assets/images/producto9/1.jpg'
                ,'assets/images/producto9/2.jpg'
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 10,
    nombre: 'Trio de elefantes',
    descripcion: 'Set de tres elefantes pintados a mano con resina protectora, pieza decorativa única.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto10/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 11,
    nombre: 'Trio de patos',
    descripcion: 'Conjunto de tres patos decorativos pintados a mano y sellados con resina duradera.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto11/1.jpg'
                ,'assets/images/producto11/2.jpg'
    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 12,
    nombre: 'Juego de Frutas',
    descripcion: 'Set de cucharas con diseño de frutas pintadas a mano y protegidas con resina transparente.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto12/1.jpg'
                ,'assets/images/producto12/2.jpg'
                ,'assets/images/producto12/3.jpg'
                ,'assets/images/producto12/4.jpg'
                ,'assets/images/producto12/5.jpg'
                ,'assets/images/producto12/6.jpg'
                ,'assets/images/producto12/7.jpg'

    ],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 13,
    nombre: 'Alcancía Perro Barcelona',
    descripcion: 'Alcancía con forma de perro pintada a mano y protegida con resina de alta calidad.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto13/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 14,
    nombre: 'Decoración Gata siamesa',
    descripcion: 'Figura de gata siamesa pintada a mano con resina protectora que resalta su elegancia.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto14/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 15,
    nombre: 'Alcancía Perro Pout',
    descripcion: 'Alcancía decorativa en forma de perro pintada a mano y sellada con resina resistente.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto15/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 16,
    nombre: 'Alcancía Perro Liga',
    descripcion: 'Alcancía con diseño de perro pintada a mano y protegida con capa de resina transparente.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto16/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 17,
    nombre: 'Alcancía Pato Donald',
    descripcion: 'Alcancía con forma de Pato Donald pintada a mano y protegida con resina brillante.',
    categoria: 'personaje',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto17/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 18,
    nombre: 'Alcancía Stitch',
    descripcion: 'Alcancía con forma de Stitch pintada a mano y sellada con resina protectora.',
    categoria: 'personaje',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto18/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 19,
    nombre: 'Soñadora Florero',
    descripcion: 'Florero decorativo pintado a mano con resina que protege los colores delicados del diseño.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto19/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 20,
    nombre: 'Jarrón de hongo',
    descripcion: 'Jarrón con forma de hongo pintado a mano y protegido con resina transparente.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto20/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 21,
    nombre: 'Alcancía de toro',
    descripcion: 'Alcancía con forma de toro pintada a mano y sellada con resina protectora.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto21/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 22,
    nombre: 'Alcancía Mickey Mouse',
    descripcion: 'Alcancía con forma de Mickey Mouse pintada a mano y protegida con resina brillante.',
    categoria: 'personaje',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto22/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 23,
    nombre: 'Decorativo pared vaca',
    descripcion: 'Adorno para pared con diseño de vaca pintado a mano y protegido con resina duradera.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto23/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 24,
    nombre: 'Alcancía calabera',
    descripcion: 'Alcancía con forma de calabera pintada a mano y sellada con resina protectora.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto24/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 25,
    nombre: 'Llavero de vaca',
    descripcion: 'Llavero con forma de vaca pintado a mano y protegido con resina para uso diario.',
    categoria: 'llavero',
    tamano: 'pequeño',
    disponible: false,
    imagenes: ['assets/images/producto25/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 26,
    nombre: 'Alcancía de Grouk',
    descripcion: 'Alcancía decorativa pintada a mano con resina que protege cada detalle del diseño.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto26/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 27,
    nombre: 'Alcancía Gato',
    descripcion: 'Alcancía con forma de gato pintada a mano y sellada con resina protectora.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto27/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 28,
    nombre: 'Portallaves vaca',
    descripcion: 'Portallaves con forma de vaca pintado a mano y protegido con resina resistente.',
    categoria: 'llavero',
    tamano: 'pequeño',
    disponible: false,
    imagenes: ['assets/images/producto28/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 29,
    nombre: 'Huevera vaca',
    descripcion: 'Huevera decorativa con vaca pintada a mano y sellada con resina protectora.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto29/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 30,
    nombre: 'Alcancía Demonio de Tasmania',
    descripcion: 'Alcancía con forma de Demonio de Tasmania pintada a mano y protegida con resina.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto30/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 31,
    nombre: 'Decorativo para pared Loro',
    descripcion: 'Adorno para pared con loro pintado a mano y protegido con resina transparente.',
    categoria: 'adorno',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto31/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 32,
    nombre: 'Huevera de tres pisos Gallina',
    descripcion: 'Huevera de tres pisos con gallinas pintada a mano y sellada con resina duradera.',
    categoria: 'adorno',
    tamano: 'grande',
    disponible: false,
    imagenes: ['assets/images/producto32/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 33,
    nombre: 'Porta llaves',
    descripcion: 'Portallaves decorativo pintado a mano con resina protectora para un acabado elegante.',
    categoria: 'llavero',
    tamano: 'pequeño',
    disponible: false,
    imagenes: ['assets/images/producto33/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  },
  {
    id: 34,
    nombre: 'Alcancía pollo',
    descripcion: 'Alcancía con forma de pollo pintada a mano y sellada con resina protectora.',
    categoria: 'animal',
    tamano: 'mediano',
    disponible: false,
    imagenes: ['assets/images/producto34/1.jpg'],
    medidas: '? cm alto × ? cm ancho × ? cm fondo'
  }
];