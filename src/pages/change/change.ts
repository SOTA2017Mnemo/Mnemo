import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Change page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-change',
  templateUrl: 'change.html',
})
export class ChangePage {

  name:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.name = navParams.get('name');

  }

}
