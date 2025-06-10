import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LocationElement } from '../../interfaces/location-element.interface';
import { homeConfig } from '../../configs/home.config';

@Component({
  selector: 'location-list',
  imports: [],
  templateUrl: './location-list.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LocationListComponent {

  protected readonly locationList: LocationElement[] = homeConfig.locationList;

}
