import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Product } from '../../interfaces';
import { homeConfig } from '../../configs/home.config';
import { RouterLink } from '@angular/router';
import { UiTitleComponent } from '@shared/ui/components/ui-title/ui-title.component';
import { AppAssets } from '@core/configs';

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

  public readonly products: Product[] = homeConfig.products;
  public readonly message = 'Hola%2C%20%C2%BFme%20podr%C3%ADas%20enviar%20el%20cat%C3%A1logo%20de%20productos%2C%20por%20favor%3F';
  public readonly whatsappUrl = `https://wa.me/${AppAssets.contact.phoneNumber}?text=Hola%20Deseo%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20este%20producto%3A%20`;
  public readonly catalogUrl = `https://wa.me/${AppAssets.contact.phoneNumber}?text=${this.message}`;

}
