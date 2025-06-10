import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, map, startWith, tap } from 'rxjs';
import { BusinessHour } from '../../interfaces/businness-hours.interface';
import { homeConfig } from '../../configs/home.config';
import { UiTitleComponent } from '@shared/ui/components/ui-title/ui-title.component';

interface Current {
  hour: string;
  minute: string;
  second: string;
  period: string;
}

@Component({
  selector: 'business-hours',
  imports: [
    UiTitleComponent,
  ],
  styleUrl: './business-hours.component.css',
  templateUrl: './business-hours.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessHoursComponent {

  protected readonly businessHours: BusinessHour[] = homeConfig.businessHours;

  public currentTime = toSignal<Current>(
    interval(1000).pipe(
      startWith(0),
      map(() => {

        const now = new Date();
        let hour = now.getHours();
        const minute = now.getMinutes();
        const second = now.getSeconds();
        const period = hour >= 12 ? 'PM' : 'AM';

        hour = hour % 12 || 12;

        return {
          hour: hour.toString().padStart(2, '0'),
          minute: minute.toString().padStart(2, '0'),
          second: second.toString().padStart(2, '0'),
          period,
        };


      })
    )
  )

}
