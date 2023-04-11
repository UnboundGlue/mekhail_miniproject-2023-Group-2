import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {IUser} from "@mp/api/users/util";

@Component({
  selector: 'mp-card-stack-container',
  templateUrl: './card-stack-container.component.html',
  styleUrls: ['./card-stack-container.component.scss'],
})
export class CardStackContainerComponent {

  userList$ = new Observable<IUser>;  //Convert to state selector next



}
