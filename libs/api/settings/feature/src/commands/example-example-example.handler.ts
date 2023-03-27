
import { NotImplementedException } from '@nestjs/common';
 import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { ExampleExampleExampleCommand } from '@mp/api/settings/util';

@CommandHandler(ExampleExampleExampleCommand)
export class ExampleExampleExampleHandler implements ICommandHandler<ExampleExampleExampleCommand> {
  constructor() {}

  async execute(command: ExampleExampleExampleCommand): Promise<void> {
    throw new NotImplementedException
  }
}
