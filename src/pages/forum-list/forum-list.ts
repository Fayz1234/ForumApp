import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListDetailsPage } from '../forum-list-details/forum-list-details';
import { TopicDetailPage } from '../topic-detail/topic-detail';

//ADDITIONAL API
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the ForumListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-forum-list',
  templateUrl: 'forum-list.html',
})
export class ForumListPage {
	forumList: any;
	//forumslist
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {

	//id, title, description details are bind in HTML
	
    
  }

  getDataFromServer(){

	let allForumsListObjectId = "forumslist"

	let loading = this.loadingCtrl.create({
		content: 'getting forums list..'
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
				this.forumList = data.json()

			}
			
	  });
  

  }

  //Life cycle method
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForumListPage');
  }

  ionViewWillEnter(){

	//Get updated data everytime
	this.getDataFromServer()

  }

  //Custom Method to Push Page with Parameters
  func(x){
  	console.log(x);
  	this.navCtrl.push(TopicDetailPage,{"selected_Item": x});
  }

}
