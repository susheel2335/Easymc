import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpModule } from '@angular/http';
import { PostProvider } from '../providers/post-provider';
import { Provider } from './providers/provider';
import { IonicStorageModule } from '@ionic/Storage';
import {HttpClientModule} from '@angular/common/http';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';

import { Camera } from '@ionic-native/Camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { IonicSelectableModule } from 'ionic-selectable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




 



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
  	BrowserModule,
  	HttpModule,
    IonicStorageModule.forRoot(), 
  	IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    IonicSelectableModule,
    BrowserAnimationsModule,

   
  	],
  providers: [
    StatusBar,
    PostProvider,
    Provider,
    SplashScreen,
    FileTransfer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Camera,
    File,
    WebView,
    FilePath
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
