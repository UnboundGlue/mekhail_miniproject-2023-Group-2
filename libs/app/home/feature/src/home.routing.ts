import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('@mp/app/feed/feature').then((m) => m.AppFeedFeatureModule),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@mp/app/profile/feature').then((m) => m.ProfileModule),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@mp/app/settings/feature').then((m) => m.AppSettingsFeatureModule),
      },
      {
        path: 'chat',
        loadChildren: () =>
          import('@mp/app/settings/feature').then((m) => m.AppSettingsFeatureModule),
      },
      {
        path: 'tos',
        loadChildren: () =>
          import('@mp/app/tos/feature').then((m) => m.TosModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/home',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouting {}
