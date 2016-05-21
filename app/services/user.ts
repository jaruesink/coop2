import {IonicApp, NavController, Nav} from 'ionic-angular';
import {Injectable, ViewChild} from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import {HomePage} from '../pages/home/home';

@Injectable()
export class User {
  isLoggedIn: boolean = false;
  name: string = 'Jake Ruesink';
  username: string = 'jaruesink';
  email: string = 'jaruesink@gmail.com';
  phone: string = '512-450-8236';
  picture: any;
  notification_id: string;
  constructor () {
  }
  login(username) {
    this.isLoggedIn = true;
    this.username = username;
    // this.nav.push(HomePage);
  }
  logout() {
    this.isLoggedIn = false;
  }
}
