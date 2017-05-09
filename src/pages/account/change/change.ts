import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.name = navParams.get('name');

  }

  ensure(){
    this.storage.ready().then(() => {
      this.storage.set('name',this.name);
      this.navCtrl.pop();
    });
  }

}
