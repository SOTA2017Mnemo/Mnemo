import { Injectable }    from '@angular/core';
import { RequestOptions,Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class DiaryService {
  url='http://120.76.144.133:9080/Diary/diary';
  constructor(private http: Http) { }
  writeDiary(userId,content,weather,imgPath,picPath) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=writeDiary&userId="+userId+"&content="+content+"&weather="+weather+"&imgPath="+imgPath+"&picPath="+picPath;
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
  diaryList(index,count,id,year) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=diaryList&index="+index+"&count="+count+"&user_id="+id+"&year="+year;
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  diaryNum(id) {
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=diaryNum&userId="+id;
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
  diaryDay(userId,month,day){
    let headers = new Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers: headers
        });
    let body= "method=diaryList&userId="+userId+"&month="+month+"&day="+day;
    return new Promise((resolve, reject) => {
      this.http.post(this.url, body, options )
        .map(res => res.json())
        .subscribe(data => resolve(data), err => reject(err))
    })
  }
}
