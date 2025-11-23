import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MainComponent } from './pages/main/main.component';
import { AuthGuard } from './guards/auth.guard';
import { FeedComponent } from './components/feed/feed.component';
import { ExploreComponent } from './components/explore/explore.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AuthChildGuard } from './guards/auth-child.gaurd';
import { deactivateGuard } from './guards/deactivate.guard';
import { ProductComponent } from './component/product/product.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
    title: 'Login Page',
    data: { user: 'arun' },
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page',
    canActivate: [AuthGuard],
    canDeactivate: [deactivateGuard],
  },
  {
    path: 'home',
    title: 'Home Page',
    canActivate: [AuthGuard],
    canActivateChild: [AuthChildGuard],
    children: [
      {
        path: 'feed/:id',
        title: 'Feed',
        component: FeedComponent,
      },
      {
        path: 'explore',
        title: 'Explore',
        component: ExploreComponent,
        children: [],
      },
      {
        path: 'settings',
        title: 'Settings',
        component: SettingsComponent,
      },
      {
        path: 'product/:id',
        component: ProductComponent,
        title: 'Product',
      },
    ],
    loadComponent: () =>
      import('./pages/main/main.component').then((m) => m.MainComponent),
  },
];
