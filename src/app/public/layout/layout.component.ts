import { ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { DockComponent } from '../components/dock/dock.component';
import { FooterBlackComponent } from '@shared/components/footer-black/footer-black.component';

@Component({
  selector: 'app-layout',
  imports: [
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    FooterBlackComponent,
    DockComponent,
  ],
  templateUrl: './layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {

  public isOpen = signal<boolean>(false);

  public toggleDrawer(): void {
    this.isOpen.update(value => !value);
  }

}
