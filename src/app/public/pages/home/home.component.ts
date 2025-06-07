import { ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { register} from 'swiper/element/bundle';
import { HeroComponent } from './components/hero/hero.component';
import { StatsComponent } from './components/stats/stats.component';

register();
@Component({
  selector: 'app-home',
  imports: [
    // RouterLink,
    HeroComponent,
    StatsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  public readonly background = { 'background-image': 'url(images/background.jpg)' };
  public readonly logo = 'images/logo.png';


  // Título:
  // Pollo fresco, sabor natural
  // Texto:
  // Seleccionamos los mejores pollos para ofrecerte calidad y frescura en cada pieza. ¡Natural, limpio y siempre listo para cocinar!

  // Título:
  // ¡Tu pollo de confianza, ahora en 3 sedes!
  // Texto:
  // Encuéntranos en nuestras sedes de Bogotá para llevar pollo crudo fresco y de excelente calidad a tu mesa, todos los días.

  // Título:
  // Compra fácil, cocina mejor
  // Texto:
  // Haz tu pedido rápido y recoge en el punto más cercano. Ahorra tiempo con pollo crudo limpio, fresco y listo para cocinar.


}
