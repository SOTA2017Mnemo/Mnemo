import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { PhotoLibrary,LibraryItem } from '@ionic-native/photo-library';




/**
 * Generated class for the Change page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-diaryDetails',
  templateUrl: 'diaryDetails.html',
})
export class DiaryDetailsPage {

  library: LibraryItem[];
  date: {year:number,month:number,day:number};
  constructor(public navCtrl: NavController,private photoLibrary: PhotoLibrary,private navParams: NavParams) {
      navParams.get('id');
    this.date={
        year:2017,
        month:4,
        day:2
    }
    
    this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getLibrary().subscribe({
            next: library => {
                var test=this.date;
                library.forEach(function(libraryItem) {
                    alert(libraryItem.creationDate.getFullYear());
                    alert(libraryItem.creationDate.getMonth());
                    alert(libraryItem.creationDate.getDate());
                    alert(test.year);
                    alert(test.year==libraryItem.creationDate.getFullYear());
                    if(test.year==libraryItem.creationDate.getFullYear()){
                        alert(libraryItem.photoURL);
                    }
                    console.log(libraryItem.id);          // ID of the photo
                    console.log(libraryItem.photoURL);    // Cross-platform access to photo
                    console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
                    console.log(libraryItem.fileName);
                    console.log(libraryItem.width);
                    console.log(libraryItem.height);
                    console.log(libraryItem.latitude);
                    console.log(libraryItem.longitude);
                });
            },
            error: err => {},
            complete: () => { console.log('could not get photos'); }
        });
    })
    .catch(err => console.log('permissions were not granted'));
  }

}