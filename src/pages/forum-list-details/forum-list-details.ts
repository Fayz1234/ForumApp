import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForumListDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forum-list-details',
  templateUrl: 'forum-list-details.html',
})
export class ForumListDetailsPage {

  // Set loopVar from navigation Paramters and bind in HTML
   loopVar: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.loopVar = this.navParams.get('selected_Item');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumListDetailsPage');
  }

}
