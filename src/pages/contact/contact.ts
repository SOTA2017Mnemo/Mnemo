import { Component } from '@angular/core';
import { ModalController,NavController,NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login'
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	isLogin:any=false;
  constructor(public modalCtrl:ModalController,public navCtrl: NavController) {

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
