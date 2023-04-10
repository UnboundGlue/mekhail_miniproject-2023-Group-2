import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { appChatFeatureRoutes } from './lib.routes';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { MessagesPageComponent } from './messages-page/messages-page.component';
import { FormsModule } from '@angular/forms';
import { FriendsPageComponent } from './friends-page/friends-page.component';
import { ProfileCardPageComponent } from './profile-card-page/profile-card-page.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appChatFeatureRoutes),
    IonicModule,
    FormsModule,
  ],
  declarations: [
    ChatPageComponent,
    MessagesPageComponent,
    FriendsPageComponent,
    ProfileCardPageComponent,
  ],
})
export class AppChatFeatureModule {}
