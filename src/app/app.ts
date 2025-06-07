import { Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, filter, first, map, startWith, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet

  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'Chicken Premium';

  private router = inject(Router);

  protected isLoading = toSignal(
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      delay(500),
      map(() => false),
      take(1),
    ), { initialValue: true }
  )

}
