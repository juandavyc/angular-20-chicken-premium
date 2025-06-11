import { AppAssets } from "@core/configs";

const appLogo = AppAssets.logo.base;

export const homeConfig = {
  hero: [
    {
      title: 'Pollo fresco',
      subtitle: '¡Natural, limpio y siempre listo para cocinar!',
      action: {
        title: 'Ir a la Tienda',
        icon: 'fa-cart-shopping',
      },
      background: 'images/home/hero-0.jpg',
      logo: appLogo,
    },
    {
      title: 'Tu pollo de confianza, ahora en 2 sedes',
      subtitle: 'Encuéntranos en nuestras sedes de Cubarral y Bogotá',
      action: {
        title: 'Ver mapa de sedes',
        icon: 'fa-cart-shopping',
      },
      background: 'images/home/hero-1.jpg',
      logo: 'images/home/hero-small-1.png',
    },
    {
      title: 'Compra fácil, cocina mejor',
      subtitle: 'Haz tu pedido rápido y recoge en el punto más cercano',
      action: {
        title: 'Ir a la Tienda',
        icon: 'fa-cart-shopping',
      },
      background: 'images/home/hero-2.jpg',
      logo: 'images/home/hero-small-2.png',
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
      title: 'Pastured Chicken Tenders',
      description: '3x more Omega-3s, 50% more Vitamins A, D, E, 21% less Saturated Fat compared',
      image: 'images/home/product-1.jpg',
      url: '/shop/products/product-1'
    },
    {
      title: 'Pastured Chicken Breast',
      description: 'Three skinless breasts per package. Each package weighs 1.0-1.5 lbs',
      image: 'images/home/product-2.jpg',
      url: '/shop/products/product-1'
    },
    {
      title: 'Pastured Chicken Thighs',
      description: 'Three bone-in and skin-on chicken thighs per package. Each package weighs 1.0 - 1.5 lbs',
      image: 'images/home/product-3.jpg',
      url: '/shop/products/product-1'
    },
    {
      title: 'Pastured Chicken Wings',
      description: 'Four skin-on chicken wings per package. Each package weighs 0.8 - 1.2 lbs Rich flavor',
      image: 'images/home/product-4.jpg',
      url: '/shop/products/product-1'
    },
  ],
  payMethods: [
    {
      image: 'images/pay-methods/visa.png',
      alt: 'Visa',
    },
    {
      image: 'images/pay-methods/mastercard.png',
      alt: 'Mastercard',
    },
    {
      image: 'images/pay-methods/nequi.png',
      alt: 'Nequi',
    },
    {
      image: 'images/pay-methods/daviplata.png',
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
  categories:[
    {
      title: 'Minoristas',
      description: 'Compra pequeña para consumo diario',
      message:'xxx',
      image:'images/home/category-1.jpg'
    },
    {
      title: 'Mayoristas',
      description: 'Pedidos grandes para negocios o eventos',
      message:'xxx',
      image:'images/home/category-2.jpg'
    },
    {
      title: 'Pollo Crudo',
      description: 'Entero, presas, filete y más',
      message:'xxx',
      image:'images/home/category-3.jpg'
    },
    {
      title: 'Otros Productos',
      description: 'Menudencias, vísceras y complementos',
      message:'xxx',
      image:'images/home/category-4.jpg'
    },
  ]



}



