import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListDetailsPage } from '../forum-list-details/forum-list-details';
import { AddTopicPage } from '../add-topic/add-topic';

import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
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
	
  detailedTopics : any

  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,  public loadingCtrl: LoadingController) {
  // this.loopVar1 = this.navParams.get('selected_Item');
  
    this.getDetailedTopics()

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicDetailPage');
  }
  listDetails(){
  	// this.navCtrl.push(ForumListDetailsPage,{"selected_Item": this.loopVar1})

  }

  //Get details topics from server
  getDetailedTopics(){
      
        let allForumsListObjectId = "forumslist"
      
        let loading = this.loadingCtrl.create({
          content: ''
          });
          loading.present();
        
          let url = 'http://introtoapps.com/datastore.php?action=load&appid=213442252&objectid='+ allForumsListObjectId ;
          console.log(url)
          this.http.get(url).subscribe(data => {
            console.log(data);
            console.log(" jsoon");
            console.log(data.json());
            loading.dismiss()
            if(data.ok){
              console.log(data)
              this.detailedTopics = data.json()
      
            }
            
          });
        
      
  }

  //navigate to New topic page
  addTopic(){
    this.navCtrl.push(AddTopicPage);
  }

}
