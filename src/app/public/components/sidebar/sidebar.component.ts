import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { LogoComponent } from '@shared/ui/components/logo/logo.component';
import { AppAssets } from '@core/configs';

@Component({
  selector: 'sidebar',
  imports: [
    LogoComponent,
    MenuItemsComponent,
  ],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {

  public toggleDrawer = output<void>();

  public callNumber = AppAssets.contact.callNumber;

  public onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }

}
