import { Component,ViewChild} from '@angular/core';


import { NavController} from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Slides } from 'ionic-angular';//注入轮播
@Component({
  selector: 'page-write',
  templateUrl: 'write.html'
})
export class WritePage{
  @ViewChild(Slides) slides: Slides;

  public path;
  pics:Pic[]=[
  	{path:"assets/img/default.png"}
  ];
  count:number=0;
  constructor(public navCtrl: NavController) {
  	
  }
  choosePhoto() {
    var options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType:0,//0对应的值为PHOTOLIBRARY ，即打开相册
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }
    if(this.count<5){
    	Camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image =  imageData;
      this.path = base64Image;
      if(this.count===0){
        this.pics.pop();
      }
      this.count++;
      this.pics.push({
      		path:base64Image
      });
    }, (err) => {
      // Handle error
    });
    }else{
    	alert("已到达上传数量限制");
    }
    

  }
}
export class Pic{
	path:string;
}
