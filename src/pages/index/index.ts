import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WritePage } from '../write/write';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DiaryDetailsPage } from '../diaryDetails/diaryDetails' ;
import { HttpService } from '../../services/HttpService';
import { DiaryService } from '../../services/DiaryService';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
    @ViewChild(Slides) slides: Slides;

    goToSlide() {
        this.slides.slideTo(2, 500);
    }

    week: string[];
    weeks: Array<{date:number,isThisMonth:boolean,festival:string}>;
    dates: Array<{week:Array<{date:number,isThisMonth:boolean,festival:string}>}>;
    clicked: number;
    name: string;
    userId: number;
    month: number;
    year: number;
    today=[];
    others=[];
    test="cdvphotolibrary://photo?photoId=F26F0BDE-E683-4F78-ACF6-163210E83E2C%2FL0%2F001";
    constructor(public navCtrl: NavController, public storage: Storage, private httpService: HttpService, private diaryService: DiaryService) {
        this.week= ['日','一','二','三','四','五','六'];
        this.dates = [];
        this.weeks = [];
        this.clicked = 0;
        this.month=new Date().getMonth();
        this.year=new Date().getFullYear();
        this.storage.ready().then(() => {
          this.storage.get('id').then((result)=>{
            this.userId=result;
            this.setClicked(new Date().getDate(),true);
          });
        });
        this.pushCalendar();
    }
 
    itemTapped(event,id) {
        let date=new Date();
        this.navCtrl.push(WritePage,{
            date:
                {year:date.getFullYear(),
                month:date.getMonth(),
                day:date.getDate()}
        });
    }

    prev(){
        if(this.month-1<0){
            this.month=11;
            this.year--;
        }
        else
            this.month--;
        this.clicked=0;
        this.dates=[];
        this.pushCalendar();
    }

    next(){
        if(this.month+1>11){
            this.month=0;
            this.year++;
        }
        else
            this.month++
        this.clicked=0;
        this.dates=[];
        this.pushCalendar();
    }

    setClicked(number,judge){
        if(judge){
            this.clicked=number;
            this.diaryService.diaryDay(this.userId,this.month+1,number).then((result:any)=>{
                this.today=[];
                this.others=[];
                for(let diary of result.data){
                    console.log(diary);
                    let year=Number(diary.diaryDate.split('-')[0]);
                    let month=Number(diary.diaryDate.split('-')[1]);
                    let day=Number(diary.diaryDate.split('-')[2]);
                    if(year==new Date().getFullYear()){
                        this.today.push({
                            year:year,
                            month:month-1,
                            day:day,
                            content:diary.content,
                            weather:diary.weather,
                            id:diary.id,
                            picPath:diary.picPath
                        });
                    }
                    else{
                        this.others.push({
                            year:year,
                            month:month-1,
                            day:day,
                            content:diary.content,
                            weather:diary.weather,
                            id:diary.id
                        });
                    }
                }
            });
        }
    }

    ionViewWillEnter(){
        this.storage.ready().then(() => {
            this.storage.get("name").then((result)=>{
                this.name=result;
            });
        });
    }

    pushCalendar(){
        let date=new Date(this.year,this.month,5);
        let start=date.getDay();
        let month=this.month;
        let day=date.getDate();
        while(day>7){
            day-=7;
        }
        start=start-day+1>=0?start-day+1:start-day+8;
        this.httpService.date(this.year,month+1).then((result:any)=>{
            let count=0;
            let weekdays=0;
            for(let i=0;i<start;i++){
                this.weeks.push({
                    date: null,
                    isThisMonth: false,
                    festival: ""
                });
                weekdays++;
            }
            while(count<result.data.length){
                for(let j=weekdays;j<7;j++){
                    if(count>=result.data.length){
                        break;
                    }
                    this.weeks.push({
                        date: count+1,
                        isThisMonth: true,
                        festival: result.data[count].lunar
                    });
                    count++;
                }
                weekdays=0;
                this.dates.push({week:this.weeks});
                this.weeks=[];
            }
        });
    }

    DiaryDetails(diaryId,year,month,day) {
    this.navCtrl.push(DiaryDetailsPage,{
      id:diaryId,
      date:{
        year:year,
        month:month,
        day:day
      }
    });
  }

}