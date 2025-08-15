import { Routes } from '@angular/router';

import { IdeComponent } from './ide/ide.component';

export const routes: Routes = [
  { path: 'ide', loadComponent: () => import('./ide/ide.component').then(m => m.IdeComponent) },
  { path: '', redirectTo: '/ide', pathMatch: 'full' }
];
