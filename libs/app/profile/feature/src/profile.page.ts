import { Component, ViewChild } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;

  //TEXT COUNTERS FOR INPUTS
  aboutMeText!: string;
  majorText!: string;
  phoneText!: string;

  changeMade = false;

  remainingAboutMeChars = 50;
  remainingMajorChars = 50;

  onAboutMeChange(event:any) {
    const inputLength = event.target.value.length;
    this.remainingAboutMeChars = 50 - inputLength;
    this.changeMade = true;
  }

  onMajorChange(event:any) {
    const inputLength = event.target.value.length;
    this.remainingMajorChars = 50 - inputLength;
    this.changeMade = true;
  }

  //IMAGES MODAL
  @ViewChild(IonModal) modal!: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      // Perform any action you want with the file, such as uploading it to a server
      alert(file.name);
    }
  }

  //INTERESTS FUNCTIONALITY
  showGamesTick = false;
  showFootballTick = false;
  showReadingTick = false;
  showMusicTick = false;
  showWritingTick = false;
  showBasketballTick = false;
  showGymTick = false;
  showArtTick = false;
  showPhotographyTick = false;
  showTravelTick = false;
  showTakeOutTick = false;
  showWineTick = false;
  showFishingTick = false;
  showIceCreamTick = false;
  showPetsTick = false;
  showSpaceTick = false;

  //Save changes

  saveChanges(){
    if(this.changeMade){
      alert("Changes to make: " + "About me: " + this.aboutMeText + "\n" + "Major: " + this.majorText + "\n" + "Phone: " + this.phoneText);
    }
  }

  //Logout
  logout(){
    alert("logout");
  }
}
