import { Component, ViewChild } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, Validators } from '@angular/forms';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { SaveProfileChanges } from '../../util/src/profile.actions';

@Component({
  selector: 'ms-profile-page',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  @Select(ProfileState.profile) profile$!: Observable<IProfile | null>;
  @Select(actionsExecuting([SaveProfileChanges])) busy$!: Observable<ActionsExecuting>;
  profileChangesForm = this.fb.group({
    aboutMe: [ '', [ Validators.maxLength(300)],],
    major: [ '', [ Validators.maxLength(50)],],
    phone: [ '', [ Validators.minLength(10), Validators.maxLength(10)],],
    //Send hobbies aswell, you hard-working developer. We love you Stacy and Arne. Thanks for reading this
  });

  //TEXT COUNTERS FOR INPUTS
  aboutMeText!: string;
  majorText!: string;
  phoneText!: string;

  changeMade = false;


  remainingAboutMeChars = 300;
  remainingMajorChars = 50;

  onAboutMeChange(event:any) {
    const inputLength = event.target.value.length;
    this.remainingAboutMeChars = 300 - inputLength;

    this.changeMade = true;

  }

  onMajorChange(event:any) {
    const inputLength = event.target.value.length;
    this.remainingMajorChars = 50 - inputLength;

    this.changeMade = true;

  }

  get aboutMe() {
    return this.aboutMeText;
  }

  get major(){
    return this.majorText;
  }

  get phone(){
    return this.phoneText;
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store
  ) {}

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

  async saveChanges(){
    if(this.changeMade){
      alert("Changes to make: " + "About me: " + this.aboutMeText + "\n" + "Major: " + this.majorText + "\n" + "Phone: " + this.phoneText);
      let aboutMeToSend=this.aboutMeText;
      let majorToSend=this.majorText;
      let phoneToSend=this.phoneText;

    
      this.store.dispatch(new SaveProfileChanges(aboutMeToSend,majorToSend,phoneToSend));
      
    }
  }

  //Logout
  logout(){
    alert("logout");
  }

}
