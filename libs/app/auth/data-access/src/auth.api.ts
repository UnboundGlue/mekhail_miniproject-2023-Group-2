import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updatePassword,
  sendPasswordResetEmail
} from '@angular/fire/auth';
import {
  IRegister,IRegisterAuthRequest,IRegisterAuthResponse
} from '@mp/api/auth/util';
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

  async register(email: string,name : string,age : string, password: string) {

    try {
        return await createUserWithEmailAndPassword(this.auth, email, password);
      // const id = userCredential.user.uid;
    }
    catch(error)  { // invalid password
      console.error(error);
      console.log("meep")
    };

  }



  async resetPassword(email: string, password: string, newPassword : string) {

    try {
      const userCredential =  await  this.login(email,password);
      return await updatePassword(userCredential.user, newPassword);
    }
    catch(error)  { // invalid password
      console.error(error);
      console.log("meep")
    };
  }

  async forgotPassword(email: string) {
    try {
      return await sendPasswordResetEmail(this.auth,email);
    }
    catch(error)  { // invalid password
      console.error(error);
      console.log("meep")
    };
  }



  async continueWithGoogle() {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async logout() {
    return await signOut(this.auth);
  }
}
