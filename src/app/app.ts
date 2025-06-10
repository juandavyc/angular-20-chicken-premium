import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, filter, first, map, startWith, take, tap } from 'rxjs';
import AOS from 'aos';
import { PlatformIdService } from '@shared/services/platform-id.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  protected title = 'Chicken Premium';
  private router = inject(Router);

  private platformidService = inject(PlatformIdService);

  protected isLoading = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      delay(500),
      map(() => false),
      take(1),
    ), { initialValue: true }
  );

  public ngOnInit(): void {
    if (!this.platformidService.isBrowser()) return;
    AOS.init({
      duration: 1000,
      // easing: 'ease-in-out',
      // once: true
    });
  }


}
