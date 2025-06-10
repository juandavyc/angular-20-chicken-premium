import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { PayMethod } from '../../interfaces';
import { homeConfig } from '../../configs/home.config';

@Component({
  selector: 'pay-methods',
  imports: [],
  templateUrl: './pay-methods.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayMethodsComponent {

  protected readonly payMethods:PayMethod[] = homeConfig.payMethods;

}
