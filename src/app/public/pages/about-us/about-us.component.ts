import { Component, inject } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/components/ui-title/ui-title.component';
import { MisionComponent } from './components/mision/mision.component';
import { ProcessComponent } from './components/process/process.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { SeoService } from '@core/services/seo.service';


@Component({
  selector: 'app-about-us',
  imports: [
    UiTitleComponent,
    MisionComponent,
    ProcessComponent,
    GalleryComponent,
  ],
  templateUrl: './about-us.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutUsComponent {

  private seo = inject(SeoService);


  constructor() {
    this.seo.setSeoMetadata({
      title: "Nosotros | Chicken Premium ",
      description: "En Chicken Premium, nos dedicamos a ofrecer pollo crudo fresco y de alta calidad en Cubarral, Meta. Somos una empresa local comprometida con el bienestar de nuestras familias y la excelencia en cada corte.",
      tags: 'Chicken Premium, pollo crudo Cubarral, venta de pollo Meta, muslos de pollo, pollo entero fresco, cortes de pollo, pollo por presas, pollo para restaurantes, pollo natural Cubarral, carnes frescas Meta',
    });
  }

}
