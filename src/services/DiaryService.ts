import { Injectable }    from '@angular/core';
import { RequestOptions,Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DiaryService {
  url='http://dev.note.tunnel.qydev.com/diary';
  constructor(private http: Http) { }
  writeDiary(title,userId,content) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=writeDiary&title="+title+"&userId="+userId+"&content="+content;
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  queryDiary(id) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=queryDiary&diary_id="+id;
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  diaryList(index,count,id) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=diaryList&index="+index+"&count="+count+"&user_id="+id;
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
}
