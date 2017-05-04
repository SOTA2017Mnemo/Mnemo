import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { YearsPage } from '../pages/years/years';
import { IndexPage } from '../pages/index/index';
import { ChangePage } from '../pages/change/change';
import { DiaryDetailsPage } from '../pages/diaryDetails/diaryDetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PhotoLibrary } from '@ionic-native/photo-library';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    YearsPage,
    IndexPage,
    ChangePage,
    DiaryDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    YearsPage,
    IndexPage,
    ChangePage,
    DiaryDetailsPage
  ],
  providers: [
    PhotoLibrary,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
