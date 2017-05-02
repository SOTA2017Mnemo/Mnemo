import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController) {

  }
}
