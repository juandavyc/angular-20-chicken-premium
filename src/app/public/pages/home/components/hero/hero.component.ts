import { afterNextRender, ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SwiperOptions } from 'swiper/types';
import { homeConfig } from '../../configs/home.config';
import { Hero } from '../../interfaces';


@Component({
  selector: 'hero',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {

  private swiperRef = viewChild.required<ElementRef<SwiperContainer>>('swiperRef');

  public readonly slides:Hero[] = homeConfig.hero;

  constructor() {
    afterNextRender(() => {
      this.initSwiper();
    });
  }
  private initSwiper() {
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      autoplay: {
        delay: 4000
      },
      loop: true,
      centeredSlides: true,
    };


    Object.assign(this.swiperRef().nativeElement, swiperOptions);

    this.swiperRef().nativeElement.initialize();
  }
}
