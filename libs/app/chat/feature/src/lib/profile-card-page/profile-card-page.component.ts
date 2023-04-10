import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'mp-profile-card-page',
  templateUrl: './profile-card-page.component.html',
  styleUrls: ['./profile-card-page.component.scss'],
})
export class ProfileCardPageComponent {

  constructor(private navCtrl: NavController) {}

  openMessagesPage() {
    this.navCtrl.navigateForward('home/chat/messages');
  }
}
