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
    star(userId) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "userId="+userId;
    return new Promise((resolve, reject) => {
      this.http.post('http://120.76.144.133:9080/Diary/starSign', body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  almanac() {
    return new Promise((resolve, reject) => {
      this.http.post('http://120.76.144.133:9080/Diary/almanac',{})
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
    date(year,month){
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "year="+year+"&month="+month;
    return new Promise((resolve, reject) => {
      this.http.post('http://120.76.144.133:9080/Diary/calendar', body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }

}