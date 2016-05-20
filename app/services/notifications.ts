import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import {User} from './user';

@Injectable()
export class Notifications {
 
  constructor (private http:Http, public user:User) {}
  sendExampleNotification() {
    var user_tokens = [this.user.notification_id];
    var title = 'Hello World';
    var message = 'This is the message.';
    this.sendNotification(user_tokens, title, message);
  }
  sendNotification(user_tokens, title, message) {
    var jwt = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1ZGIxNDMwZi0xODgyLTQ2MTYtYjg0Yi03MzlkZjdmZDkzOWQifQ.duZbKsP0NVLTHoMgLz3KK4Q1xCOpIt4eQ7gISkNJV4c';
    var tokens = user_tokens;
    var profile = 'prod';
    var url = 'https://api.ionic.io/push/notifications';
    var data = {
      "tokens": tokens,
      "profile": profile,
      "notification": {
        "title": title,
        "message": message
      },
      "content-available": 1
    };
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Bearer ' + jwt);

    this.http.post(url, JSON.stringify(data), {
      headers: headers
    })
      .map(response => response.json())
      .subscribe(
        data => console.log(data),
        err => console.log(err),
        () => console.log('Push Request Complete')
      );
  }

}
