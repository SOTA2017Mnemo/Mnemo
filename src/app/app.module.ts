import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { WritePage } from '../pages/write/write';
import { AccountPage } from '../pages/account/account';
import { TimeflowPage } from '../pages/timeflow/timeflow';
import { TabsPage } from '../pages/tabs/tabs';
import { YearsPage } from '../pages/years/years';
import { IndexPage } from '../pages/index/index';
import { ChangePage } from '../pages/account/change/change';
import { DiaryDetailsPage } from '../pages/diaryDetails/diaryDetails';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login'
import { PicDetailsPage } from '../pages/diaryDetails/picDetails/picDetails'


import { HttpModule }    from '@angular/http';
import { UserService } from '../services/UserService';
import { HttpService } from '../services/HttpService';
import { DiaryService } from '../services/DiaryService';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';

import { PhotoLibrary } from '@ionic-native/photo-library';
import { CDVPhotoLibraryPipe } from './cdvphotolibrary.pipe.ts';

@NgModule({
  declarations: [
    MyApp,
    WritePage,
    AccountPage,
    TimeflowPage,
    TabsPage,
    YearsPage,
    IndexPage,
    ChangePage,
    DiaryDetailsPage,
    LoginPage,
    WelcomePage,
    CDVPhotoLibraryPipe,
    PicDetailsPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WritePage,
    AccountPage,
    TimeflowPage,
    TabsPage,
    YearsPage,
    IndexPage,
    LoginPage,
    ChangePage,
    DiaryDetailsPage,
    WelcomePage,
    PicDetailsPage
  ],
  providers: [
    PhotoLibrary,
    HttpService,
    UserService,
    DiaryService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
