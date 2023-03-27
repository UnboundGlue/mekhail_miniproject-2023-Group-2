import { IAuth, ResetAuthCommand } from '@mp/api/auth/util';
import { NotImplementedException } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Timestamp } from 'firebase-admin/firestore';
import { Auth } from '../models';

@CommandHandler(ResetAuthCommand)
export class ResetAuthHandler implements ICommandHandler<ResetAuthCommand> {
  constructor(private publisher: EventPublisher) {}

  async execute(command: ResetAuthCommand) {
      //Reset the user password when forgot
      return new NotImplementedException;
    };
}
