import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ForumListPage } from '../pages/forum-list/forum-list';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;

  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      this.storage.get('saved_user').then((data) => {
        console.log('local storage') 
        console.log(data) 
        if (data != null || data != undefined){
          this.rootPage = ForumListPage;
        }else{
          this.rootPage = LoginPage;
      
        }
      });

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
