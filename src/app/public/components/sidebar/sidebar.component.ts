import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { LogoComponent } from '@shared/components/logo/logo.component';
import { MenuItemsComponent } from '../menu-items/menu-items.component';

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

  public onToggleDrawer(): void {
    this.toggleDrawer.emit();
  }

}
