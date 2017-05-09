import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TimeflowPage } from '../timeflow/timeflow';
import { DiaryService } from '../../services/DiaryService';

@Component({
  selector: 'page-years',
  templateUrl: 'years.html'
})
export class YearsPage {

  userId: string;
  years=[];
  constructor(public navCtrl: NavController, public storage: Storage,private diaryService:DiaryService) {
    this.storage.ready().then(() => {
      this.storage.get('id').then((result)=>{
        this.userId=result;
      });
    });
  }

  itemTapped(event,year) {
    this.navCtrl.push(TimeflowPage,{
      year:year
    });
  }

  ionViewWillEnter(){  
    this.diaryService.diaryNum(this.userId).then((data:any)=>{
      this.years=data.years;
    });
  }

}