import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Register } from '@mp/app/register/util';
import {
    ActionsExecuting,
    actionsExecuting
} from '@ngxs-labs/actions-executing';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'ms-register-page',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  @Select(actionsExecuting([Register])) busy$!: Observable<ActionsExecuting>;
  registerForm = this.fb.group({
    displayName: [ '', [ Validators.minLength(6), Validators.maxLength(64)],],
    age: [ '', [ Validators.minLength(1), Validators.maxLength(3)],],
    email: [ '', [Validators.email, Validators.minLength(6), Validators.maxLength(64)],],
    password: ['', [Validators.minLength(6), Validators.maxLength(64)]],
    confirmPassword: ['', [Validators.minLength(6), Validators.maxLength(64)]],
  });
  showPassword = false;

  get email() {
    return this.registerForm.get('email');
  }

  get displayName() {
    return this.registerForm.get('username');
  }

  get age() {
    return this.registerForm.get('age');
  }

  get password() {
    return this.registerForm.get('password');
  }
  
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get confirmError(): string {
    console.log(this.password?.value);
    if (this.confirmPassword?.errors?.['required']) 
      return 'Confirm your password';
    if(this.confirmPassword?.value != this.password?.value)
      return 'Passwords does not match';
    return 'Invalid';
    
  }

  get ageError(): string {
    if (this.age?.errors?.['required']) return 'age is required';
    if (this.age?.errors?.['minlength'])
      return 'age should be longer than 0 characters';
    if (this.age?.errors?.['maxlength'])
      return 'age should be shorter than 4 characters';

    return 'age is invalid';
  }

  get displayNameError(): string {
    if (this.displayName?.errors?.['required']) return 'Username is required';
    if (this.displayName?.errors?.['minlength'])
      return 'Username should be longer than 6 characters';
    if (this.displayName?.errors?.['maxlength'])
      return 'Username should be shorter than 64 characters';

    return 'Username is invalid';
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
    private readonly store: Store
  ) {}

  register() {
    if (this.registerForm.valid) {
      this.store.dispatch(new Register());
    }
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
}
