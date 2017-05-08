import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WritePage } from '../write/write';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DiaryDetailsPage } from '../diaryDetails/diaryDetails' ;

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
    constructor(public navCtrl: NavController, public storage: Storage) {
        this.week= ['日','一','二','三','四','五','六'];
        this.dates = [];
        this.weeks = [];
        this.clicked = 0;
        this.storage.ready().then(() => {
          this.storage.get('name').then((result) => {
            this.name=result;
          });
        });

        for(let i = 0; i < 5; i++) {
            for(let j=1;j<8;j++){
                this.weeks.push({
                    date: i*7+j,
                    isThisMonth: true,
                    festival: ""
                });
            }
            this.dates.push({week:this.weeks});
            this.weeks=[];
        }
    }

    itemTapped(event) {
        let date=new Date();
        this.navCtrl.push(WritePage,{
            date:
                {year:date.getFullYear(),
                month:date.getMonth(),
                day:date.getDate()}
        });
    }

    setClicked(number){
        this.clicked=number;
    }

    ionViewDidEnter(){
        this.goToSlide();
    }

    DiaryDetails(event,diaryId) {
    this.navCtrl.push(DiaryDetailsPage,{
      id:diaryId
    });
  }

}