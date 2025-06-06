import { afterNextRender, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';

register();

@Component({
  selector: 'app-about-us',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutUsComponent {

  private swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');

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
