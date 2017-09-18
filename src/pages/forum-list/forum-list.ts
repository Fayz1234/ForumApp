import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListDetailsPage } from '../forum-list-details/forum-list-details';
import { TopicDetailPage } from '../topic-detail/topic-detail';
import { LoginPage } from '../login/login';

//required imports for features implementation
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage, public http: Http, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {

  }



  //Network call
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

  signoutuser(){
	this.storage.remove('saved_user');
    this.navCtrl.setRoot(LoginPage);
  }

  //Custom Method to Push Page with Parameters
  func(x){
  	console.log(x);
  	this.navCtrl.push(TopicDetailPage,{"selected_Item": x});
  }

}
