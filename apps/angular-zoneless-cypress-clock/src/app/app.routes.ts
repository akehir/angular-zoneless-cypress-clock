import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'welcome',
        loadComponent: () => import('./nx-welcome.component').then(c => c.NxWelcomeComponent),
        
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full',
      },
];
