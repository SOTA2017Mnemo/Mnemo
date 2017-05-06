import { Component,ViewChild} from '@angular/core';
import { NavController,NavParams,AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { Slides } from 'ionic-angular';//注入轮播
import { PhotoLibrary,LibraryItem } from '@ionic-native/photo-library';

const THUMBNAIL_WIDTH = 120;
const THUMBNAIL_HEIGHT = 96;

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
  date:any;
  todayPic: LibraryItem[];
  diary:any;

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,private navParams: NavParams,private photoLibrary: PhotoLibrary) {
  	this.date=navParams.get('date');
    this.todayPic=[];
  }

  done() {
    this.showConfirm();
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: '是否上传额外信息？',
      message: '额外信息包括今天保存的照片等',
      buttons: [
        {
          text: '否',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '是',
          handler: () => {
            this.getTodayPhoto();
          }
        }
      ]
    });
    confirm.present();
  }

  getTodayPhoto() {
    let that=this;
    this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getLibrary({thumbnailWidth: THUMBNAIL_WIDTH, thumbnailHeight: THUMBNAIL_HEIGHT}).subscribe({
            next: library => {
                library.forEach(function(libraryItem) {
                    if(that.date.year==libraryItem.creationDate.getFullYear()
                    &&that.date.month==libraryItem.creationDate.getMonth()
                    &&that.date.day==libraryItem.creationDate.getDate()){
                        that.todayPic.push(libraryItem);
                        console.log(libraryItem.id);          // ID of the photo
                        console.log(libraryItem.photoURL);    // Cross-platform access to photo
                        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
                        console.log(libraryItem.fileName);
                        console.log(libraryItem.width);
                        console.log(libraryItem.height);
                        console.log(libraryItem.latitude);
                        console.log(libraryItem.longitude);
                    }
                });
            },
            error: err => {},
            complete: () => { 
                console.log('could not get photos'); }
        });
    })
    .catch(err => console.log('permissions were not granted'));
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
