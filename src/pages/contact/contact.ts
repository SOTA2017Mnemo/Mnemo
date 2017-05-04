import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	isLogin:any=false;
  constructor(public navCtrl: NavController) {

  }
  toLogin(){
  	this.navCtrl.push(LoginPage);
  }
}
