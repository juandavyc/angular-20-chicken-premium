import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../interfaces';
import { homeConfig } from '../../configs/home.config';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'products',
  imports: [
    RouterLink,
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
