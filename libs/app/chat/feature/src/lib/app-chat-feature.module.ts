import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appChatFeatureRoutes } from './lib.routes';
import { ChatPageComponent } from './chat-page/chat-page.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(appChatFeatureRoutes), IonicModule],
  declarations: [ChatPageComponent],
})
export class AppChatFeatureModule {}
