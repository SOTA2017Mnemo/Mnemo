import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DiaryDetailsPage } from '../diaryDetails/diaryDetails';
import { DiaryService } from '../../services/DiaryService';


@Component({
  selector: 'page-timeflow',
  templateUrl: 'timeflow.html'
})
export class TimeflowPage {

  userId: string;
  diarys=[];
  year: number;
  constructor(public navCtrl: NavController, public storage: Storage,private diaryService:DiaryService,private navParams: NavParams) {
    this.year=navParams.get('year');
    this.storage.ready().then(() => {
      this.storage.get('id').then((result)=>{
        this.userId=result;
      });
    });
  }

  itemTapped(event,diaryId,date) {
    this.navCtrl.push(DiaryDetailsPage,{
      id:diaryId,
      date:date
    });
  }

  ionViewWillEnter(){  
    this.diaryService.diaryList(0,10,this.userId,this.year).then((result)=>{
      this.pushContent(result);
    });
  }

  ionViewWillLeave(){  
    this.diarys=[]; 
  }  

  pushContent(data){
    for(let i=0;i<data.data.length;i++){
      this.diarys.push({
        content: JSON.parse(data.data[i]).content,
        weather: JSON.parse(data.data[i]).weather,
        diaryId: JSON.parse(data.data[i]).id,
        date: {
          year: Number(JSON.parse(data.data[i]).diaryDate.split('-')[0]),
          month: Number(JSON.parse(data.data[i]).diaryDate.split('-')[1])-1,
          day: Number(JSON.parse(data.data[i]).diaryDate.split('-')[2])
        }
      });
    }
  }

}
