import { Component } from '@angular/core';
import { ChangePage } from './change/change'

import { ModalController,NavController,NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  name:string
  alert:boolean
  password:boolean
  gender:string
  birthday:string
  alertTime:string
  isLogin:boolean=false;
  constructor(public navCtrl: NavController,public modalCtrl:ModalController) {
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
  toLogin(){
  	let loginModal=this.modalCtrl.create(LoginPage);
  	loginModal.onDidDismiss(data=>{
  	 if(data==="ok"){
  	 	this.isLogin=true;
  	 }
  	})
  	loginModal.present();
  }
  logout(){
  	this.isLogin=false;
  }
}
