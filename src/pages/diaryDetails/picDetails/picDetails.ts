import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PhotoLibrary,LibraryItem } from '@ionic-native/photo-library';





@Component({
  selector: 'page-picDetails',
  templateUrl: 'picDetails.html'
})


export class PicDetailsPage{

    pics: LibraryItem[];
    date: any;

    constructor(public navCtrl: NavController,private photoLibrary: PhotoLibrary,private navParams: NavParams) {
      this.pics=this.navParams.get('pics');
      this.date=this.navParams.get('date');
    }

}