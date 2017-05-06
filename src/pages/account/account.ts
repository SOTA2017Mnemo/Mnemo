import { Component } from '@angular/core';
import { ChangePage } from './change/change'
import { ModalController,NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { Storage } from '@ionic/storage';
import {App } from 'ionic-angular'; 

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
  constructor(public navCtrl: NavController,public modalCtrl:ModalController, public storage: Storage,private app: App) {
    this.storage.ready().then(() => {
      this.storage.get("name").then((result)=>{
        this.name=result;
      });
    });
    this.alert=true;
    this.password=false;
    this.gender="m";
  }

  itemTapped(event) {
    this.navCtrl.push(ChangePage, {
      name: this.name
    });
  }

  logout(){
  	this.storage.ready().then(() => {
      this.storage.remove("account");
      this.storage.remove("password");
      this.storage.remove("name");
      this.storage.remove("id");
      this.storage.set("isLogin",false);
    });
    this.app.getRootNav().setRoot(LoginPage);
  }
}
