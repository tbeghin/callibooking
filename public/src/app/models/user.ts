import firebase from 'firebase';
import UserInfo = firebase.UserInfo;

export class User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  admin: boolean;

  constructor(user: firebase.User | UserInfo) {
    this.uid = user.uid;
    this.displayName = user.displayName;
    this.email = user.email;
    this.photoURL = user.photoURL;
    this.admin = false;
  }
}
