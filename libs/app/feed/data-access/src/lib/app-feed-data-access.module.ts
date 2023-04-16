import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appFeedDataAccessRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appFeedDataAccessRoutes)],
})
export class AppFeedDataAccessModule {}
