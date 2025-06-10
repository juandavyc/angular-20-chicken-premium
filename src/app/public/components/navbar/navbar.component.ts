import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { MenuItemsComponent } from '../menu-items/menu-items.component';
import { LogoComponent } from '@shared/ui/components/logo/logo.component';

@Component({
  selector: 'navbar',
  imports: [
    LogoComponent,
    MenuItemsComponent,
  ],
  host: {
    'class': 'navbar bg-gradient-to-t from-red-700 to-red-600 shadow-lg shadow-neutral-300',
  },
  templateUrl: './navbar.component.html',
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  public toggleDrawer = output<void>();

  public onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }

}
