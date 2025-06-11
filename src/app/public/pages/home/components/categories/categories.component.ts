import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Category } from '../../interfaces';
import { homeConfig } from '../../configs/home.config';

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

  protected categories: Category[] = homeConfig.categories;


}
