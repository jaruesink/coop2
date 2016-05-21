import {Page, NavController} from 'ionic-angular';
import {User} from '../../services/user';
import {FORM_DIRECTIVES, FORM_PROVIDERS} from '@angular/common';
import {HomePage} from '../../pages/home/home';

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  constructor(public user: User, public nav: NavController) {}
  login(email, password) {
    this.user.loginWithPassword(email, password);
    this.nav.push(HomePage);
  }
}
