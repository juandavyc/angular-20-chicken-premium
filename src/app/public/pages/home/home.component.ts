import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';
import { UiTitleComponent } from '@shared/ui/components/ui-title/ui-title.component';
import { ProductsComponent } from './components/products/products.component';
import { PayMethodsComponent } from './components/pay-methods/pay-methods.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { BusinessHoursComponent } from './components/business-hours/business-hours.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { SeoService } from '@core/services/seo.service';
import { homeConfig } from './configs/home.config';


register();
@Component({
  selector: 'app-home',
  imports: [
    // RouterLink,
    HeroComponent,
    StatsComponent,
    ProductsComponent,
    PayMethodsComponent,
    LocationListComponent,
    FrequentQuestionsComponent,
    BusinessHoursComponent,
    CategoriesComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  private seo = inject(SeoService);

  constructor() {
    this.seo.setSeoMetadata(homeConfig.seo);
  }

}
