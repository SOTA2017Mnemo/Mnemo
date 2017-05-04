import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TimeflowPage } from '../timeflow/timeflow';

@Component({
  selector: 'page-years',
  templateUrl: 'years.html'
})
export class YearsPage {

  constructor(public navCtrl: NavController) {

  }

  itemTapped(event) {
    this.navCtrl.push(TimeflowPage);
  }

}