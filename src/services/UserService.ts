import { Injectable }    from '@angular/core';
import { Request,RequestOptions,RequestMethod,Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  
  constructor(private http: Http) { }
  login(account,password) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=login&account="+account+"&password="+password;
    return new Promise((resolve, reject) => {
      this.http.post('http://dev.note.tunnel.qydev.com/user', body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  register(account,password,name) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=register&account="+account+"&password="+password+"&name="+name;
    return new Promise((resolve, reject) => {
      this.http.post('http://dev.note.tunnel.qydev.com/user', body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
