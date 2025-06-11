import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';
import { AppAssets } from '@core/configs';

@Component({
  selector: 'footer-black',
  imports: [
    LogoComponent,
    RouterLink,
  ],
  templateUrl: './footer-black.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterBlackComponent {

  public year = new Date().getFullYear();

  protected whatsappUrl = `https://wa.me/${AppAssets.contact.phoneNumber}`;

}
