import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    title: 'githubLocate | Search',
    component: Home
  },
  {
    path: 'user/:username',
    title: 'githubLocate | User Profile',
    loadComponent: () => import('./features/user/user').then((m) => m.User),
  },
  {
    path: 'user/:username/repos',
    title: 'githubLocate | Repositories',
    loadComponent: () =>
      import('./features/view-repo/view-repo').then((m) => m.ViewRepo),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
