import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appForgotFeatureRoutes } from './lib.routes';
import { ForgotPageComponent } from './forgot-page/forgot-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appForgotFeatureRoutes)],
  declarations: [ForgotPageComponent],
})
export class AppForgotFeatureModule {}
