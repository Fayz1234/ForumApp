import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

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

  topicDetails = {"title" : "", "detail" : ""}

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }
  //http://introtoapps.com/datastore.php?action=append&appid=213442252&objectid=forumslist&data={"title":"Good News", "detail" : "we have a good news today"}

  //Life Cycle method
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTopicPage');
  }

  //Custom Method for Pop Page from navigation
  post(){
  	this.addNewTopic()
  }

  addNewTopic(){

    let allForumsListObjectId = "forumslist"
    
      let loading = this.loadingCtrl.create({
        content: ''
        });
        loading.present();
      
        let url = 'http://introtoapps.com/datastore.php?action=append&appid=213442252&objectid='+ allForumsListObjectId + '&data=' + JSON.stringify( this.topicDetails) ;
        console.log(url)
        this.http.get(url).subscribe(data => {
          console.log(data);
          
          loading.dismiss()
          if(data.ok){
            console.log(data)
            this.navCtrl.popToRoot()
    
          }
          
        },(error) => {
          
              loading.dismiss()
              
                         });
      
      

  }

}
