import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { homeConfig } from '../../configs/home.config';
import { Stat } from '../../interfaces/stat.interface';

@Component({
  selector: 'stats',
  imports: [],
  templateUrl: './stats.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {

  public readonly stats:Stat[] = homeConfig.stats;

}
