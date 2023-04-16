import {AfterViewInit, Component, ElementRef, EventEmitter,Output, ViewChild} from '@angular/core';

import {
  Host,
  Element,
  Event,
  h,
} from '@stencil/core';

import { Gesture, GestureConfig, createGesture } from '@ionic/core';
import {window} from "rxjs";


@Component({
  selector: 'mp-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements AfterViewInit{

  gestureHostElement: HTMLElement | undefined;
  @Output() matchUsers = new EventEmitter;

 // @ViewChild('card-item') swipeableCard : HTMLElement;
  gestureSetup(){
    //this.initGesture();
  }

  //async initGesture() {}

  ngAfterViewInit() {

    this.gestureHostElement = this.elRef.nativeElement.querySelector('#card-item');

    this.initGesture();
  }

  async initGesture(){
    const style = this.gestureHostElement?.style
    const windowWidth = this.windowRef.innerWidth;

    const gestureOptions: GestureConfig = {
      el: this.gestureHostElement as HTMLElement,
      gestureName: "tinder-swipe",
      onStart: () => {
        console.log('Gesture started!')
      },
      onMove: (ev) => {
        console.log(ev);
      },
      onEnd: (ev) => {
        console.log('Gesture end');
      }

    }

    const gesture: Gesture = await createGesture(gestureOptions);

    gesture.enable();

  }

  constructor(
    private elRef: ElementRef,
    private windowRef: Window) {

  }




}
