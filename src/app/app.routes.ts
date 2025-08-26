import { Routes } from '@angular/router';
import { HomePage } from './pages';

export const routes: Routes = [
  {
    path: '',
    title: 'githubLocate | Search',
    component: HomePage,
  },
  {
    path: 'user/:username',
    title: 'githubLocate | User Profile',
    loadComponent: () => import('./pages').then((m) => m.UserPage),
  },
  {
    path: 'user/:username/repos',
    title: 'githubLocate | Repositories',
    loadComponent: () => import('./pages').then((m) => m.ViewRepoPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
