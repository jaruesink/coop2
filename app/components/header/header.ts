import {NavController} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {User} from '../../services/user';
import {HeaderServices} from '../../services/header';
import {LoginPage} from '../../pages/login/login';

@Component({
  templateUrl: 'build/components/header/header.html',
  selector: 'app-header'
})
export class AppHeader {
  constructor(public user: User, private header: HeaderServices, public nav: NavController) {}
  showLogin() {
    this.nav.push(LoginPage);
  }
}
