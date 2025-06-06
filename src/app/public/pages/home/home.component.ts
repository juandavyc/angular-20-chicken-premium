import { afterNextRender, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { RouterLink } from '@angular/router';

register();
@Component({
  selector: 'app-home',
  imports: [
    // RouterLink,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  public readonly background = { 'background-image': 'url(images/background.jpg)' };
  public readonly logo = 'images/logo.png';

  private swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');
// Título:
// Pollo fresco, sabor natural
// Texto:
// Seleccionamos los mejores pollos para ofrecerte calidad y frescura en cada pieza. ¡Natural, limpio y siempre listo para cocinar!

// Título:
// ¡Tu pollo de confianza, ahora en 3 sedes!
// Texto:
// Encuéntranos en nuestras sedes de Bogotá para llevar pollo crudo fresco y de excelente calidad a tu mesa, todos los días.

// Título:
// Compra fácil, cocina mejor
// Texto:
// Haz tu pedido rápido y recoge en el punto más cercano. Ahorra tiempo con pollo crudo limpio, fresco y listo para cocinar.
  constructor() {
    afterNextRender(() => {
      this.initSwiper();
    });
  }

  private initSwiper() {
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      // spaceBetween: 30,
      // autoplay: { delay: 5000 },
      // loop: true,
      // centeredSlides: true,
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      // pagination: {
      //   clickable: true,
      // },
    };


    Object.assign(this.swiperRef().nativeElement, swiperOptions);
    this.swiperRef().nativeElement.initialize();
  }
}
