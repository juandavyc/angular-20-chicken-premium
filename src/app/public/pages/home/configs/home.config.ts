import { AppAssets } from "@core/configs";

const appLogo = AppAssets.logo.base;
const appPhoneNumber = AppAssets.contact.phoneNumber;
const appSeoImage = AppAssets.seo;

export const homeConfig = {
  seo: {
    title: 'Chicken Premium | Pollo fresco de calidad',
    description: 'En Chicken Premium encontrarás pollo crudo de excelente calidad en Cubarral, Meta. Vendemos pollo entero, muslos, presas, cortes especiales y más, siempre fresco y al mejor precio. Ideal para tu hogar, restaurante o evento.',
    tags: 'Chicken Premium, pollo crudo Cubarral, venta de pollo Meta, muslos de pollo, pollo entero fresco, cortes de pollo, pollo por presas, pollo para restaurantes, pollo natural Cubarral, carnes frescas Meta',
    image: appSeoImage,
  },
  hero: [
    {
      title: 'Pollo fresco',
      subtitle: '¡Natural, limpio y siempre listo para cocinar!',
      action: {
        title: 'Ver catálogo',
        icon: 'fa-book-open',
        url: `https://wa.me/${appPhoneNumber}?text=Hola%2C%20%C2%BFme%20podr%C3%ADas%20enviar%20el%20cat%C3%A1logo%20de%20productos%2C%20por%20favor%3F`
      },
      background: 'https://i.postimg.cc/2jbh7Lwx/hero-0.jpg',
      logo: appLogo,
    },
    {
      title: 'Tu pollo de confianza, ahora en 2 sedes',
      subtitle: 'Encuéntranos en nuestras sedes de Cubarral y Bogotá',
      action: {
        title: 'Ver mapa de sedes',
        icon: 'fa-location-dot',
        url: `https://wa.me/${appPhoneNumber}?text=Hola%2C%20%C2%BFme%20podr%C3%ADas%20enviar%20el%20mapa%20de%20sedes%2C%20por%20favor%3F`
      },
      background: 'https://i.postimg.cc/fTYd641t/hero-1.jpg',
      logo: 'https://i.postimg.cc/NG3TJGCv/hero-small-1.png',
    },
    {
      title: 'Compra fácil, cocina mejor',
      subtitle: 'Haz tu pedido rápido y recoge en el punto más cercano',
      action: {
        title: 'Ver catálogo',
        icon: 'fa-book-open',
        url: `https://wa.me/${appPhoneNumber}?text=Hola%2C%20%C2%BFme%20podr%C3%ADas%20enviar%20el%20cat%C3%A1logo%20de%20productos%2C%20por%20favor%3F`
      },
      background: 'https://i.postimg.cc/YCkF7nwX/hero-2.jpg',
      logo: 'https://i.postimg.cc/YC3WC6rt/hero-small-2.png',
    }
  ],
  stats: [
    {
      title: 'Sedes',
      value: 2,
      description: 'Activas',
      icon: 'fa-solid fa-map-marker-alt',
    },
    {
      title: 'Calidad',
      value: '100%',
      description: 'Premium',
      icon: 'fa-solid fa-award',
    },
    {
      title: 'Años de',
      value: '5',
      description: 'Experiencia',
      icon: 'fa-solid fa-hourglass-half',
    }
  ],
  products: [
    {
      title: 'Tiras de Pollo',
      description: '3 veces más Omega-3, 50% más Vitaminas A, D, E, 21% menos Grasas Saturadas',
      image: 'https://i.postimg.cc/mDczjKQr/product-1.jpg',
      url: 'Tiras%20de%20Pollo'
    },
    {
      title: 'Pechuga de Pollo',
      description: 'Tres pechugas sin piel por paquete. Cada paquete pesa entre 450 y 700g',
      image: 'https://i.postimg.cc/4drKSw5Q/product-2.jpg',
      url: 'Pechuga%20de%20Pollo'
    },
    {
      title: 'Muslos de Pollo',
      description: 'Tres muslos de pollo con hueso y piel por paquete. Cada paquete pesa entre 450 y 700 g',
      image: 'https://i.postimg.cc/C5kZTDrT/product-3.jpg',
      url: 'Muslos%20de%20Pollo'
    },
    {
      title: 'Alas de Pollo',
      description: 'Cuatro alitas de pollo con piel por paquete. Cada paquete pesa entre 300 y 500 g - Sabor intenso',
      image: 'https://i.postimg.cc/ZYdvdtb7/product-4.jpg',
      url: 'Alas%20de%20Pollo'
    },
  ],
  payMethods: [
    {
      image: 'https://i.postimg.cc/MZN0CmT4/visa.png',
      alt: 'Visa',
    },
    {
      image: 'https://i.postimg.cc/gjXVwnMN/mastercard.png',
      alt: 'Mastercard',
    },
    {
      image: 'https://i.postimg.cc/PrDbTvvq/nequi.png',
      alt: 'Nequi',
    },
    {
      image: 'https://i.postimg.cc/sX0PDpJM/daviplata.png',
      alt: 'Daviplata',
    },
  ],
  locationList: [
    {
      code: '01',
      address: 'Dirección 100 #100 - 1 local 1-20',
      location: 'Melgar - Tolima',
      image: 'images/home/map-1.jpg',
      url: {
        maps: 'https://maps.app.goo.gl/vD94ZNfDMdrxn2dq9',
        waze: 'https://ul.waze.com/ul?place=ChIJzXwPxqaZP44R7VGgkWDNj8E&ll=4.60191280%2C-74.07204110&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'
      }
    },
    {
      code: '02',
      address: 'Dirección 200 #200 - 2 local 2-40',
      location: 'San Martin - Meta',
      image: 'images/home/map-2.jpg',
      url: {
        maps: 'https://maps.app.goo.gl/vD94ZNfDMdrxn2dq9',
        waze: 'https://ul.waze.com/ul?place=ChIJzXwPxqaZP44R7VGgkWDNj8E&ll=4.60191280%2C-74.07204110&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location'
      }
    }
  ],
  questions: [
    {
      question: "¿Hacen domicilios y cuánto cuesta el envío?",
      answer: "Sí, realizamos envíos. Si tu pedido es menor a $100.000, se aplica un costo adicional por el domicilio."
    },
    {
      question: "¿Puedo comprar pollo por presas o solo entero?",
      answer: "Puedes elegir entre pollo entero o por presas, como pechuga, alas, muslos y más."
    },
    {
      question: "¿Qué tipo de pollo venden?",
      answer: "Vendemos pollo crudo tipo griller, fresco, entero o por presas, ideal para preparar en casa o en negocios."
    },
    {
      question: "¿Hacen entregas a otras ciudades o solo local?",
      answer: "Actualmente las entregas se hacen dentro del municipio. Para otras zonas, consulta disponibilidad."
    }
  ],
  businessHours: [
    {
      title: 'Lunes a Viernes',
      hours: '06:00 AM - 06:30 PM'
    },
    {
      title: 'Sábados',
      hours: '06:00 AM - 04:30 PM'
    },
    {
      title: 'Domingos',
      hours: '08:00 AM - 02:30 PM'
    },
    {
      title: 'Festivos',
      hours: 'No hay atención'
    }
  ],
  categories: [
    {
      title: 'Minoristas',
      description: 'Compra pequeña para consumo diario',
      message: 'Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Minoristas',
      image: 'https://i.postimg.cc/G29hrY2g/category-1.jpg',
    },
    {
      title: 'Mayoristas',
      description: 'Pedidos grandes para negocios o eventos',
      message: 'Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Mayoristas',
      image: 'https://i.postimg.cc/50G9t0Q4/category-2.jpg'
    },
    {
      title: 'Pollo Crudo',
      description: 'Entero, presas, filete y más',
      message: 'Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Pollo%20Crudo',
      image: 'https://i.postimg.cc/7h2HJkSg/category-3.jpg'
    },
    {
      title: 'Otros Productos',
      description: 'Menudencias, vísceras y complementos',
      message: 'Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Otros%20Productos',
      image: 'https://i.postimg.cc/NLvg1zxZ/category-4.jpg'
    },
  ]



}



