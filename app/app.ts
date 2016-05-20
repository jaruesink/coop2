import {App, Platform, Nav} from 'ionic-angular';
import {StatusBar, Push} from 'ionic-native';
import {ViewChild} from '@angular/core';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {Notifications} from './services/notifications';
import {User} from './services/user';
import {HeaderServices} from './services/header';
import {FORM_PROVIDERS} from '@angular/common';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import 'rxjs/Rx';

@App({
  template: '<ion-nav id="app-nav" [root]="rootPage"></ion-nav>',
  config: {
    mode: 'md'
  }, // http://ionicframework.com/docs/v2/api/config/Config/
  providers: [
    Notifications,
    User,
    FORM_PROVIDERS,
    HeaderServices,
    FIREBASE_PROVIDERS,
    defaultFirebase('https://fir-app-8f3ba.firebaseio.com/')]
})
export class MyApp {
  rootPage:any = HomePage;
  @ViewChild(Nav) nav: Nav;
  constructor(private platform: Platform, public user: User) {
    if (window.onDeviceReady) {
      this.initializeApp();
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      var push = Push.init({
        android: {
          senderID: "460438236970"
        },
        ios: {
          alert: "true",
          badge: true,
          sound: 'false'
        },
        windows: {}
      });
      push.on('registration', (data) => {
        console.log(data.registrationId);
        this.user.notification_id = data.registrationId;
      });
      push.on('notification', (data) => {
        console.log(data);
      });
      push.on('error', (e) => {
        console.log(e.message);
      });
    });
  }
}
