import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DiaryDetailsPage } from '../diaryDetails/diaryDetails'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event,diaryId) {
    this.navCtrl.push(DiaryDetailsPage,{
      id:diaryId
    });
  }

}
