import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from '../pages/login/login';
import { ForumListPage } from '../pages/forum-list/forum-list';
import { SignupPage } from '../pages/signup/signup';
import { ForumListDetailsPage } from '../pages/forum-list-details/forum-list-details';
import { TopicDetailPage } from '../pages/topic-detail/topic-detail';
import { AddTopicPage } from '../pages/add-topic/add-topic';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ForumListPage,
    SignupPage,
    ForumListDetailsPage,
    TopicDetailPage,
    AddTopicPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ForumListPage,
    ForumListDetailsPage,
    TopicDetailPage,
    AddTopicPage,
    SignupPage,

    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
