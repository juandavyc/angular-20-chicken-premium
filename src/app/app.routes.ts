import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.route')
  },
  {
    path: '**',
    redirectTo: '',
  }
];
