import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { SignupPage } from "../pages/signup/signup";
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ClockPage } from "../pages/clock/clock";
import { ProfilePage } from "../pages/profile/profile";

import { UtilServiceProvider } from '../providers/util-service/util-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HTTP } from "@ionic-native/http";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    SignupPage,
    HomePage,
    ClockPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      spinner: 'bubbles',
      tabsPlacement: 'bottom'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    SignupPage,
    HomePage,
    ClockPage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HTTP,
    UtilServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
