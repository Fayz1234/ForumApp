import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListDetailsPage } from '../forum-list-details/forum-list-details';
import { AddTopicPage } from '../add-topic/add-topic';
/**
 * Generated class for the TopicDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-topic-detail',
  templateUrl: 'topic-detail.html',
})
export class TopicDetailPage {
	loopVar: any;
	loopVar1: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.loopVar1 = this.navParams.get('selected_Item');
  //hard oode data for Demo purpose
  this.loopVar = [1,2,3,4,5,6,7,8];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
  }
  listDetails(){
  	this.navCtrl.push(ForumListDetailsPage,{"selected_Item": this.loopVar1})

  }

  
  addTopic(){
    this.navCtrl.push(AddTopicPage);
  }

}
