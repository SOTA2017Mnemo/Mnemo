import { Component } from '@angular/core';
import { ViewController,NavController } from 'ionic-angular';
import {UserService} from '../../services/UserService';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs'

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	account:any;
	password:any;
	username:any;
	check:any;
  tip:any='注册';
  toLogin=1;
  constructor(public viewCtrl: ViewController,private userService: UserService,public storage: Storage,public navCtrl: NavController) {

  }
  register(){
    this.userService.register(this.account,this.password,this.username).then(data=>this.afterRegister(data));
  }

  login(){
  	this.userService.login(this.account,this.password).then(data=>this.afterLogin(data));
  }
  afterRegister(data){
    if(data.status==="200"){
      alert("Register success！");
      this.storage.ready().then(() => {
        this.storage.set('account',this.account);
        this.storage.set('password',this.password);
      });
      this.navCtrl.setRoot(TabsPage);
    }else{
      alert("Something is wrong with your registration...");
    }
  }
  afterLogin(data){
  	if(data.status==="200"){
  		alert("Login success！");
      this.storage.ready().then(() => {
        this.storage.set("isLogin",true);
        this.storage.set('account',this.account);
        this.storage.set('password',this.password);
      });
      this.navCtrl.setRoot(TabsPage);
  	}else{
  		alert("Invalid account/password!");
  	}
  }

  toggle(){
  this.toLogin=1-this.toLogin;
  if(this.toLogin==1){
    this.tip='注册';
  }else{
    this.tip='登录';
  }
  }
      
  

}