import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appFeedFeatureRoutes } from './lib.routes';
import { FeedPageComponent } from './feed-page/feed-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appFeedFeatureRoutes)],
  declarations: [FeedPageComponent],
})
export class AppFeedFeatureModule {}
