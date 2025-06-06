import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

const PublicRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'about-us',
        loadComponent: () => import('./pages/about-us/about-us.component'),
      },
      {
        path: 'shop',
        loadComponent: () => import('./pages/shop/shop.component'),
      },
      {
        path: 'contact-us',
        loadComponent: () => import('./pages/contact-us/contact-us.component'),
      },
      {
        path: '**',
        redirectTo: '',
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

export default PublicRoutes;
