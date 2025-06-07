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
      icon: 'fa-solid fa-circle-user',
    },
    {
      title: 'Calidad',
      value: '100%',
      description: 'Premium',
      icon: 'fa-solid fa-circle-user',
    },
    {
      title: 'Años de',
      value: '5',
      description: 'Experiencia',
      icon: 'fa-solid fa-circle-user',
    }
  ]
}



