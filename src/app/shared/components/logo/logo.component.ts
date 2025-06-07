import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppAssets } from '@core/configs';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'logo',
  imports: [
    RouterLink
  ],
  templateUrl: './logo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoComponent {

  protected readonly appName = environment.appName;
  protected readonly appLogoSmall = AppAssets.logo.small;

}
