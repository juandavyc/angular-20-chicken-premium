import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiTitleComponent } from '@shared/ui/components/ui-title/ui-title.component';
import { Question } from '../../interfaces';
import { homeConfig } from '../../configs/home.config';

@Component({
  selector: 'frequent-questions',
  imports: [
    UiTitleComponent,
  ],
  templateUrl: './frequent-questions.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FrequentQuestionsComponent {

  protected questions:Question[] = homeConfig.questions;

}
