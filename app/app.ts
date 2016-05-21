import {App, Platform} from 'ionic-angular';
import {StatusBar, Push} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {Notifications} from './services/notifications';
import {User} from './services/user';
import {HeaderServices} from './services/header';
import {Inject} from '@angular/core';
import {FORM_PROVIDERS} from '@angular/common';
import * as AF2 from 'angularfire2';
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
    AF2.FIREBASE_PROVIDERS,
    AF2.defaultFirebase('https://fir-app-8f3ba.firebaseio.com/'),
    AF2.firebaseAuthConfig({
      provider: AF2.AuthProviders.Password,
      method: AF2.AuthMethods.Password,
      remember: 'default'
    })
  ]
})
export class MyApp {
  rootPage:any = HomePage;
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
