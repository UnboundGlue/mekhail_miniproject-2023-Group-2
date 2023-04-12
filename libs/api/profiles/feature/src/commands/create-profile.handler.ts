import {
    CreateProfileCommand,
    IProfile,
    ProfileStatus
} from '@mp/api/profiles/util';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { Profile } from '../models';

@CommandHandler(CreateProfileCommand)
export class CreateProfileHandler
  implements ICommandHandler<CreateProfileCommand>
{
  constructor(private publisher: EventPublisher) {}

  async execute(command: CreateProfileCommand) {
    console.log(`${CreateProfileHandler.name}`);

    const request = command.request;
    const UID = request.user.id;
    const displayName = request.user.displayName;
    const email = request.user.email;
    // const photoURL = request.user.photoURL;
    const cellphone = request.user.phoneNumber;

    const data: IProfile = {
      UID,
      TimeRemaining : null,
      RecentlyActive : null ,
      Gender: null,
      Age : null,
      Hobby : null,
      Major : null,
      Name : null,   //name consists of a struct, so will have to hanndle later
       ContactDetails : {
        Email : email,
        Cell : cellphone
      },
      Created: Timestamp.fromDate(new Date()),
    };
    const profile = this.publisher.mergeObjectContext(Profile.fromData(data));

    profile.create();
    profile.commit();
  }
}
