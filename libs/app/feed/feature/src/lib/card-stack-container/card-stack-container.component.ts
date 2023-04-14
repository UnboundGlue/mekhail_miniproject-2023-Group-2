import {Component, ElementRef} from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "@mp/api/users/util";
import { Gesture, GestureConfig, createGesture } from "@ionic/angular";

@Component({
  selector: 'mp-card-stack-container',
  templateUrl: './card-stack-container.component.html',
  styleUrls: ['./card-stack-container.component.scss'],
})
export class CardStackContainerComponent {

  userList$ = new Observable<IUser>;  //Convert to state selector next

  element = document.querySelector('card');

  gesture: Gesture | undefined;

  constructor() {

    if(this.element){
      this.gesture = createGesture({
        el: this.element,
        gestureName: 'match-swipe',
        onStart: () => {},
        onMove: (ev) => {},
        onEnd: (ev) => {},
      })
    }

    this.gesture?.enable();
  }



}
