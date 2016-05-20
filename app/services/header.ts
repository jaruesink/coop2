import {Injectable} from '@angular/core';
import {Http, HTTP_PROVIDERS, Headers} from '@angular/http';
import {ROUTER_PROVIDERS, Router} from '@angular/router';

@Injectable()
export class HeaderServices {
  hide_back_button: boolean = true;
  constructor (private http:Http, private router:Router) {}
}
