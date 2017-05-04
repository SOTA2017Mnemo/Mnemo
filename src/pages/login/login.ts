import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import {UserService} from '../../services/UserService';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	account:any;
	password:any;
	username:any;
	check:any;
  constructor(public viewCtrl: ViewController,private userService: UserService) {

  }
  call(){
  this.userService.register(this.account,this.password,this.username).then(data=>console.log(data));
  //this.httpService.testio();
  //this.httpService.post();
  //this.httpService.post2();
    //this.httpService.request('http://dev.note.tunnel.qydev.com/user?method=register&account=test123&password=123456');
    //this.httpService.request('http://120.76.144.133:8080/greeting');
    //this.httpService.greeting().then(mobile => {this.mobile=mobile;this.check=this.mobile.id;});
  
    
  }
  login(){
  	this.userService.login(this.account,this.password).then(data=>this.afterLogin(data));

  }
  afterLogin(data){
  	if(data.status==="200"){
  		alert("Login success！");
      let data = "ok";
      this.viewCtrl.dismiss(data);
  	}else{
  		alert("Invalid account/password!");
  	}
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}