import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DiaryDetailsPage } from '../diaryDetails/diaryDetails'


@Component({
  selector: 'page-timeflow',
  templateUrl: 'timeflow.html'
})
export class TimeflowPage {

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event,diaryId) {
    this.navCtrl.push(DiaryDetailsPage,{
      id:diaryId
    });
  }

}
