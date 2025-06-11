import { afterNextRender, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';

import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
register();
@Component({
  selector: 'app-gallery',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {

  private swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');

  public images = [
    'https://i.postimg.cc/2jbh7Lwx/hero-0.jpg',
    'https://i.postimg.cc/fTYd641t/hero-1.jpg',
    'https://i.postimg.cc/YCkF7nwX/hero-2.jpg',
    'https://i.postimg.cc/mDczjKQr/product-1.jpg',
    'https://i.postimg.cc/4drKSw5Q/product-2.jpg',
    'https://i.postimg.cc/C5kZTDrT/product-3.jpg',
    'https://i.postimg.cc/ZYdvdtb7/product-4.jpg',
    'https://i.postimg.cc/G29hrY2g/category-1.jpg',
    'https://i.postimg.cc/50G9t0Q4/category-2.jpg',
    'https://i.postimg.cc/7h2HJkSg/category-3.jpg',
    'https://i.postimg.cc/NLvg1zxZ/category-4.jpg',
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
