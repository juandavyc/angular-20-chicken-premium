import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { RouterLink } from '@angular/router';

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


}
