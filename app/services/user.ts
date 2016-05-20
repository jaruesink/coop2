import {IonicApp} from 'ionic-angular';
import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import {HomePage} from '../pages/home/home';

@Injectable()
export class User {
  isLoggedIn: boolean = true;
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
  }
  logout() {
    this.isLoggedIn = false;
  }
}
