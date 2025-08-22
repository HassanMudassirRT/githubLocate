import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'githubLocate | Search',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
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
