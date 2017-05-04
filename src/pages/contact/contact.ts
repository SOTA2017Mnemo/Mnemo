import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChangePage } from '../change/change'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  name:string
  alert:boolean
  password:boolean
  gender:string
  birthday:string
  alertTime:string
  constructor(public navCtrl: NavController) {
    this.name="keyrm";
    this.alert=true;
    this.password=false;
    this.gender="m";
  }

  itemTapped(event) {
    this.navCtrl.push(ChangePage, {
      name: this.name
    });
  }

}
