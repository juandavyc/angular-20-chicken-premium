import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../interfaces';
import { homeConfig } from '../../configs/home.config';
import { RouterLink } from '@angular/router';
import { UiTitleComponent } from '@shared/ui/components/ui-title/ui-title.component';

@Component({
  selector: 'products',
  imports: [
    RouterLink,
    UiTitleComponent,
  ],
  styles: `
  .clip-diagonals {
    clip-path: polygon(0 20%, 100% 0%, 100% 100%, 0% 100%);
  }`,
  templateUrl: './products.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {

  protected readonly products: Product[] = homeConfig.products;

}
