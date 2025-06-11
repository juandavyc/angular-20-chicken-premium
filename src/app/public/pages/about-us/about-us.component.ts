import { Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/components/ui-title/ui-title.component';
import { MisionComponent } from './components/mision/mision.component';
import { ProcessComponent } from './components/process/process.component';
import { GalleryComponent } from './components/gallery/gallery.component';


@Component({
  selector: 'app-about-us',
  imports: [
    UiTitleComponent,
    MisionComponent,
    ProcessComponent,
    GalleryComponent,
  ],
  templateUrl: './about-us.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutUsComponent {



}
