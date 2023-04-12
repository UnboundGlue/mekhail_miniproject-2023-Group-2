import { Injectable } from '@angular/core';
import { Register as AuthRegister } from '@mp/app/auth/util';
import { SetError } from '@mp/app/errors/util';
import { Register } from '@mp/app/register/util';
import { Action, State, StateContext } from '@ngxs/store';

export interface RegisterStateModel {
  registerForm: {
    model: {
      displayName: string | null;
      age : string | null;
      email: string | null;
      password: string | null;
    };
    dirty: false;
    status: string;
    errors: object;
  };
}

@State<RegisterStateModel>({
  name: 'register',
  defaults: {
    registerForm: {
      model: {
        displayName: null,
        age : null,
        email: null,
        password: null,
      },
      dirty: false,
      status: '',
      errors: {},
    },
  },
})
@Injectable()
export class RegisterState {
  @Action(Register)
  async register(ctx: StateContext<RegisterStateModel>) {
    try {
      const state = ctx.getState();
      const email = state.registerForm.model.email;
      const name = state.registerForm.model.displayName;
      const age = state.registerForm.model.age;
      const password = state.registerForm.model.password;

      if (email && name && age && password) {
        return ctx.dispatch(new AuthRegister(" ",age," "," ",email, password));
      }
      return ctx.dispatch(new SetError('Email or password or age or username'));
    } catch (error) {
      return ctx.dispatch(new SetError((error as Error).message));
    }
  }
}
