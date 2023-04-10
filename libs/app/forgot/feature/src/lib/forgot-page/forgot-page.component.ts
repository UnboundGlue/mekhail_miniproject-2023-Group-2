import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Forgot } from '@mp/app/forgot/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'mp-forgot-page',
  templateUrl: './forgot-page.component.html',
  styleUrls: ['./forgot-page.component.scss'],
})
export class ForgotPageComponent {


  @Select(actionsExecuting([Forgot])) busy$!: Observable<ActionsExecuting>;
  forgotForm = this.fb.group({
    email: [
      '',
      [Validators.email, Validators.minLength(6), Validators.maxLength(64)],
    ],
    password: ['', [Validators.minLength(6), Validators.maxLength(64)]],
  });
  showPassword = false;

  get email() {
    return this.forgotForm.get('email');
  }

  get password() {
    return this.forgotForm.get('password');
  }

  get emailError(): string {
    if (this.email?.errors?.['email']) return 'Email is invalid';
    if (this.email?.errors?.['required']) return 'Email is required';
    if (this.email?.errors?.['minlength'])
      return 'Email should be longer than 6 characters';
    if (this.email?.errors?.['maxlength'])
      return 'Email should be shorter than 64 characters';

    return 'Email is invalid';
  }

  get passwordError(): string {
    if (this.password?.errors?.['required']) return 'Password is required';
    if (this.password?.errors?.['minlength'])
      return 'Password should be longer than 6 characters';
    if (this.password?.errors?.['maxlength'])
      return 'Password should be shorter than 64 characters';

    return 'Password is invalid';
  }

  constructor(
    private readonly fb: FormBuilder,
    private readonly store: Store,
    private readonly router : Router,
  ) {}

  login() {
    if (this.forgotForm.valid) {
      //this.store.dispatch(new Forgot());
      this.router.navigate(['/login']);

    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
