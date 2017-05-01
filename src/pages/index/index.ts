import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {
    @ViewChild(Slides) slides: Slides;

    goToSlide() {
        this.slides.slideTo(2, 500);
    }

    week: string[];
    weeks: Array<{date:number,isThisMonth:boolean,festival:string}>;
    dates: Array<{week:Array<{date:number,isThisMonth:boolean,festival:string}>}>;
    clicked: number;
    constructor(public navCtrl: NavController) {
        this.week= ['日','一','二','三','四','五','六'];
        this.dates = [];
        this.weeks = [];
        this.clicked = 0;

        for(let i = 0; i < 5; i++) {
            for(let j=1;j<8;j++){
                this.weeks.push({
                    date: i*7+j,
                    isThisMonth: true,
                    festival: ""
                });
            }
            this.dates.push({week:this.weeks});
            this.weeks=[];
        }
    }

    itemTapped(event) {
        this.navCtrl.push(AboutPage);
    }

    setClicked(number){
        this.clicked=number;
    }

}