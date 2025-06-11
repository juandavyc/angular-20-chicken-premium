import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { LogoComponent } from '@shared/ui/components/logo/logo.component';
import { AppAssets } from '@core/configs';

@Component({
  selector: 'navbar',
  imports: [
    LogoComponent,
    MenuItemsComponent,
  ],
  host: {
    'class': 'fixed z-20 navbar bg-gradient-to-t from-red-700 to-red-600 ',
  },
  templateUrl: './navbar.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  public toggleDrawer = output<void>();

  public readonly callNumber = AppAssets.contact.callNumber;
  public readonly whatsappNumber = `https://wa.me/${AppAssets.contact.phoneNumber}`;

  public onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }

}
