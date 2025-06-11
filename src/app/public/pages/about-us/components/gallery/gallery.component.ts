import { afterNextRender, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';

import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-gallery',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {

  private swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');

  protected images = [
    'images/home/hero-0.jpg',
    'images/home/hero-1.jpg',
    'images/home/hero-2.jpg',
    'images/home/product-1.jpg',
    'images/home/product-2.jpg',
    'images/home/product-3.jpg',
    'images/home/product-4.jpg',
    'images/home/category-1.jpg',
    'images/home/category-2.jpg',
    'images/home/category-3.jpg',
    'images/home/category-4.jpg',

  ]

  constructor() {
    afterNextRender(() => {
      this.initSwiper();
    });
  }
  private initSwiper() {
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      // spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        clickable: true,
      },
    };


    Object.assign(this.swiperRef().nativeElement, swiperOptions);
    this.swiperRef().nativeElement.initialize();
  }

}
