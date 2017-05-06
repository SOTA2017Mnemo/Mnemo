import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PhotoLibrary,LibraryItem } from '@ionic-native/photo-library';
import { PicDetailsPage } from './picDetails/picDetails'


const THUMBNAIL_WIDTH = 120;
const THUMBNAIL_HEIGHT = 96;

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

  thumbnailWidth = THUMBNAIL_WIDTH + 'px';
  thumbnailHeight = THUMBNAIL_HEIGHT + 'px';

  library: LibraryItem[];
  pics: LibraryItem[];
  showpics: LibraryItem[];
  date: {year:number,month:number,day:number};
  constructor(public navCtrl: NavController,private photoLibrary: PhotoLibrary,private navParams: NavParams) {
      navParams.get('id');
    this.date={
        year:2017,
        month:4,
        day:3
    }
    this.pics = [];
    this.showpics = [];
    let that=this;
    this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getLibrary({thumbnailWidth: THUMBNAIL_WIDTH, thumbnailHeight: THUMBNAIL_HEIGHT}).subscribe({
            next: library => {
                library.forEach(function(libraryItem) {
                    if(that.date.year==libraryItem.creationDate.getFullYear()
                    &&that.date.month==libraryItem.creationDate.getMonth()
                    &&that.date.day==libraryItem.creationDate.getDate()){
                        that.pics.push(libraryItem);
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
                if(this.pics.length>3)
                    this.showpics=this.pics.slice(0,3);
                console.log('could not get photos'); }
        });
    })
    .catch(err => console.log('permissions were not granted'));
  }


  itemTapped(event) {
    this.navCtrl.push(PicDetailsPage,{
        pics : this.pics,
        date : this.date
    });
  }

}