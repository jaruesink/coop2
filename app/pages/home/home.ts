import {Page} from 'ionic-angular';
import {Notifications} from '../../services/notifications';
import {User} from '../../services/user';
import {AppHeader} from '../../components/header/header';
import {AngularFire} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Page({
  templateUrl: 'build/pages/home/home.html',
  directives: [AppHeader]
})
export class HomePage {
  messages: Observable<any[]>;
  constructor(af: AngularFire, private notify: Notifications, public user: User) {
    this.messages = af.list('/messages');
  }
}
