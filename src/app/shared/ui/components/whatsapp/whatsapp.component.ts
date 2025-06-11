import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppAssets } from '@core/configs';

@Component({
  selector: 'whatsapp',
  imports: [],
  templateUrl: './whatsapp.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappComponent {

  public urlPhoneNumber = `https://wa.me/${AppAssets.contact.phoneNumber}`;

}
