import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appFeedFeatureRoutes } from './lib.routes';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { CardStackContainerComponent } from './card-stack-container/card-stack-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appFeedFeatureRoutes),
    IonicModule,
  ],
  declarations: [FeedPageComponent, CardStackContainerComponent],
})
export class AppFeedFeatureModule {}
