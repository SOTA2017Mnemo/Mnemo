import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { PhotoLibrary,LibraryItem } from '@ionic-native/photo-library';
import { PicDetailsPage } from './picDetails/picDetails';
import { Health } from '@ionic-native/health';
import { DiaryService } from '../../services/DiaryService';


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
  steps: string;
  distance: string;
  diaryId: number;
  content: string;
  constructor(public navCtrl: NavController,private photoLibrary: PhotoLibrary,
        private navParams: NavParams,private health: Health,private diaryService:DiaryService) {
    this.diaryId=navParams.get('id');
    this.date=navParams.get('date');
    this.pics = [];
    this.showpics = [];
    let that=this;
    this.health.isAvailable()
        .then((available:boolean) => {
            this.health.requestAuthorization([
                'steps','distance'
            ])
            .then(()=>{
                this.health.queryAggregated({startDate: new Date(new Date(this.date.year,this.date.month,this.date.day).getTime()-24 * 60 * 60 * 1000),endDate: new Date(this.date.year,this.date.month,this.date.day),dataType:'steps',bucket: 'day'})
                .then((result)=>{
                    that.steps=result[result.length-1].value;
                })
                .catch(e => console.log(e));
                this.health.queryAggregated({startDate: new Date(new Date(this.date.year,this.date.month,this.date.day).getTime()-24 * 60 * 60 * 1000),endDate: new Date(this.date.year,this.date.month,this.date.day),dataType:'distance',bucket: 'day'})
                .then((result)=>{
                    that.distance=result[result.length-1].value;
                })
                .catch(e => console.log(e));
            })
            .catch(e => console.log(e));
        })
        .catch(e => console.log(e));


    this.photoLibrary.requestAuthorization().then(() => {
        this.photoLibrary.getLibrary({thumbnailWidth: THUMBNAIL_WIDTH, thumbnailHeight: THUMBNAIL_HEIGHT}).subscribe({
            next: library => {
                library.forEach(function(libraryItem) {
                    if(that.date.year==libraryItem.creationDate.getFullYear()
                    &&that.date.month==libraryItem.creationDate.getMonth()
                    &&that.date.day==libraryItem.creationDate.getDate()){
                        that.pics.push(libraryItem);
                        console.log(libraryItem.photoURL);
                    }
                });
            },
            error: err => {},
            complete: () => { 
                if(this.pics.length>3)
                    this.showpics=this.pics.slice(0,3);
                else
                    this.showpics=this.pics;
                console.log('could not get photos'); }
        });
    })
    .catch(err => console.log('permissions were not granted'));
  }

  getDiary(id){
    this.diaryService.queryDiary(this.diaryId).then((data:any) => {
        this.content=JSON.parse(data.data).content;
    });
  }


  itemTapped(event) {
    this.navCtrl.push(PicDetailsPage,{
        pics : this.pics,
        date : this.date
    });
  }

  ionViewWillEnter(){ 
      this.getDiary(this.diaryId);
  }

}