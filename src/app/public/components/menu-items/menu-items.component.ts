import { booleanAttribute, ChangeDetectionStrategy, Component, input, linkedSignal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AppAssets } from '@core/configs';

const NAVBAR = 'menu menu-horizontal text-white uppercase';
const SIDEBAR = 'menu menu-vertical menu-lg w-full text-black';

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

  public urlPhoneNumber = `https://wa.me/${AppAssets.contact.phoneNumber}`;

  public menuClasses = linkedSignal({
    source: this.isSidebar,
    computation: ((source) => {
      if (!source) return NAVBAR;
      return SIDEBAR;
    })
  })

}
