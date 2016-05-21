import {IonicApp} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import * as AF2 from 'angularfire2';

@Injectable()
export class User {
  isLoggedIn: boolean = false;
  name: string = 'Jake Ruesink';
  email: string = 'jaruesink@gmail.com';
  phone: string = '512-450-8236';
  picture: any;
  notification_id: string;
  users: any;
  constructor (public auth:AF2.FirebaseAuth, public data: AF2.AngularFire) {
    this.users = this.data.list('/users');
      this.users.do(snapshots => {
        snapshots.forEach(snapshot => console.log(snapshot));
      }).subscribe(snapshots => console.log(snapshots.length));
    }
  loginWithPassword(email, password) {
    // this.auth.login({ email: email, password: password})
    //   .catch(function (error) {
    //     switch (error.code) {
    //       case "INVALID_USER":
    //         console.log("Invalid email");
    //         // this.login_error = "Email is invalid";
    //         break;
    //       case "INVALID_PASSWORD":
    //         console.log("Invalid password");
    //         // this.login_error = "Password is invalid";
    //         break;
    //       default:
    //         console.log('Error: ', error.code, error.message);
    //         break;
    //     }
    // });
    this.isLoggedIn = true;
  }
}
