import {Page} from 'ionic-angular';
import {User} from '../../services/user';
import {FORM_DIRECTIVES, FORM_PROVIDERS} from '@angular/common';

@Page({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {
  constructor(public user: User) {

  }
}
