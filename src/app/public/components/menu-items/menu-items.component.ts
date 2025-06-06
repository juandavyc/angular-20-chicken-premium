import { booleanAttribute, ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const NAVBAR = 'menu menu-horizontal';
const SIDEBAR = 'menu menu-vertical bg-base-200 min-h-full w-80 p-4';

@Component({
  selector: 'menu-items',
  imports: [
    RouterLink,
    RouterLinkActive,
  ],
  host: {
    class: '',
  },
  styleUrl:'./menu-items.component.css',
  templateUrl: './menu-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemsComponent {

  public isSidebar = input(false, { transform: booleanAttribute })

  public menuClasses = linkedSignal({
    source: this.isSidebar,
    computation: ((source) => {
      if (!source) return NAVBAR;
      return SIDEBAR;
    })
  })

}
