import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword
} from '@angular/fire/auth';
import { signOut } from '@firebase/auth';

@Injectable()
export class AuthApi {
  constructor(private readonly auth: Auth) {}

  auth$() {
    return authState(this.auth);
  }

  async login(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async register(email: string, password: string) {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async resetPassword(email: string, password: string, newPassword : string) {
     await this.login(email,password).then((userCredential) => {
      return updatePassword(userCredential.user, newPassword);
    })
    .catch((error) => { // invalid password
      console.error(error);
    });
  }

  async continueWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
