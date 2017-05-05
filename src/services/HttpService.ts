import { Injectable }    from '@angular/core';
import { RequestOptions,Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class HttpService {
  
  constructor(private http: Http) { }
  weather() {
    return new Promise((resolve, reject) => {
      this.http.get('http://api.yytianqi.com/observe?city=CH020100&key=a0mtp5i3lwm8un97')
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  weatherByIp(ip) {
    return new Promise((resolve, reject) => {
      this.http.get('http://api.yytianqi.com/observe?city='+ip+'&key=a0mtp5i3lwm8un97')
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
}