import { booleanAttribute, ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

const NAVBAR = 'menu menu-horizontal text-white';
const SIDEBAR = 'menu menu-vertical menu-xl w-full text-black';

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
