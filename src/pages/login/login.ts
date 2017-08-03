import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListPage } from '../forum-list/forum-list';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  goto(){
  	this.navCtrl.push(ForumListPage)
  }
  signup(){
  	this.navCtrl.push(SignupPage);
  }

}
