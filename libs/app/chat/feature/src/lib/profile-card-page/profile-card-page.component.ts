import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'mp-profile-card-page',
  templateUrl: './profile-card-page.component.html',
  styleUrls: ['./profile-card-page.component.scss'],
})
export class ProfileCardPageComponent {

  constructor(private navCtrl: NavController) {}

  @Input() personName!: string;
  @Input() lastMessage!: string;
  @Input() unreadMessages!: string;
  @Input() imgSrc!: string;

  openMessagesPage() {
    alert("persons name: " + this.personName + "\nlast message: " + this.lastMessage + "\nunreadMessages: " + this.unreadMessages + "\nimg-src: " + this.imgSrc);
    this.navCtrl.navigateForward('home/chat/messages');
  }
}
