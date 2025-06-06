import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

@Component({
  selector: 'navbar',
  imports: [
    LogoComponent,
    MenuItemsComponent,
  ],
  host: {
    'class': 'navbar bg-error shadow-lg shadow-neutral-300',
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
