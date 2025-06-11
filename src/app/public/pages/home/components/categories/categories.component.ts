import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from '../../interfaces';
import { homeConfig } from '../../configs/home.config';
import { AppAssets } from '@core/configs';

@Component({
  selector: 'categories',
  imports: [],
  styles: `
  @layer utilities {
    .card.image-full > figure img {
      filter: brightness(50%);
    }
  }
  `,
  templateUrl: './categories.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesComponent {

  public readonly categories: Category[] = homeConfig.categories;
  public readonly whatsappUrl = `https://wa.me/${AppAssets.contact.phoneNumber}?text=`;

}
