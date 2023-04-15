import { Component, ViewChild, ElementRef } from '@angular/core';
import { IProfile } from '@mp/api/profiles/util';
import { ProfileState } from '@mp/app/profile/data-access';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormBuilder, Validators } from '@angular/forms';
import { ActionsExecuting, actionsExecuting } from '@ngxs-labs/actions-executing';
import { SaveProfileChanges } from '../../util/src/profile.actions';
import { Logout } from '@mp/app/auth/util'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";


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
      const storage = getStorage();
      const storageRef = ref(storage, file.name);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed',
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            this.profileImage=downloadURL;
          });
        }
      );
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
  profileImage: string = "https://picsum.photos/200/400?random=13";
  currentCell!: string;
  async saveChanges() {
    if (this.changeMade) {
      this.getEmailValue();
      let aboutMeToSend = this.aboutMeText;
      let majorToSend = this.majorText;
      let phoneToSend = this.phoneText;


      let hobbies: string[] = [];
      if (this.showGamesTick)
        hobbies.push("games");
      if (this.showFootballTick)
        hobbies.push("football");
      if (this.showReadingTick)
        hobbies.push("reading");
      if (this.showMusicTick)
        hobbies.push("music");
      if (this.showWritingTick)
        hobbies.push("writing");
      if (this.showBasketballTick)
        hobbies.push("basketball");
      if (this.showGymTick)
        hobbies.push("gym");
      if (this.showArtTick)
        hobbies.push("art");
      if (this.showPhotographyTick)
        hobbies.push("photography");
      if (this.showTravelTick)
        hobbies.push("travel");
      if (this.showTakeOutTick)
        hobbies.push("takeOut");
      if (this.showWineTick)
        hobbies.push("wine");
      if (this.showFishingTick)
        hobbies.push("fishing");
      if (this.showIceCreamTick)
        hobbies.push("iceCream");
      if (this.showPetsTick)
        hobbies.push("pets");
      if (this.showSpaceTick)
        hobbies.push("space");

      this.store.dispatch(new SaveProfileChanges(aboutMeToSend, majorToSend, phoneToSend, hobbies));

    }
  }

  @ViewChild('currentEmail') currentEmail?: ElementRef;
  getEmailValue() {
    alert(this.currentEmail?.nativeElement.innerText);
  }

  //Logout
  logout() {
    this.store.dispatch(new Logout());
  }

}
