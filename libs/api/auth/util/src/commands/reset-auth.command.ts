import { IUpdateAuthRequest } from '../requests';

export class ResetAuthCommand {
  constructor(public readonly request: IUpdateAuthRequest) {} //create net interface 
}
