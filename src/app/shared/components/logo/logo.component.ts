import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

  public readonly appName = environment.appName;

}
