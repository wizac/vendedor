import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import {VenderPage} from '../pages/vender/vender';
import {VerificarPage} from '../pages/verificar/verificar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Geolocation } from '@ionic-native/geolocation';

import { PvdGeolocationProvider } from '../providers/pvd-geolocation/pvd-geolocation';
import { PvdHttpProvider } from '../providers/pvd-http/pvd-http';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';
import { Device } from '@ionic-native/device'



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VenderPage,
    VerificarPage
  ],
  imports: [
   HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VenderPage,
    VerificarPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PvdGeolocationProvider,
    PvdHttpProvider,
    Geolocation,
    Device

  ]
})
export class AppModule {}
