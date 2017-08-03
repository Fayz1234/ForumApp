import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddTopicPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-topic',
  templateUrl: 'add-topic.html',
})
export class AddTopicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  //Life Cycle method
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTopicPage');
  }

  //Custom Method for Pop Page from navigation
  post(){
  	this.navCtrl.pop();
  }

}
