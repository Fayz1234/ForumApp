import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListPage } from '../forum-list/forum-list';
import { SignupPage } from '../signup/signup';

//Features required imports
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {Md5} from 'ts-md5/dist/md5';

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

  inputCredentials = { 'name' : '', 'pasword' : ''  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: Http, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    
        let valid = this.validateInputData()
        
        if (valid){ this.goToHome() }
    
      }

      
  validateInputData(): Boolean{
    
    let valid = true

    if (this.inputCredentials.name.length < 1) {

      valid = false
      this.showAlert('Enter user name');
    
    }else if (this.inputCredentials.pasword.length < 6) {
      
      valid = false
      this.showAlert('Enter 6 character password.');
    
    }

    return valid

  }    

   //Ionic toast plugin cross platform
   showAlert(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }


  goToHome(){

    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();

    let url = 'http://introtoapps.com/datastore.php?action=load&appid=213442252&objectid=' + this.inputCredentials.name;
    console.log(url)
    this.http.get(url).subscribe(data => {
      loading.dismiss()
      //local storage of user, to maintain app state
      this.storage.set("saved_user", this.inputCredentials.name)
      this.navCtrl.setRoot(ForumListPage);

  },(error) => {

    loading.dismiss()
    this.showAlert('User not found');
               });

  }

  

  signup(){
  	this.navCtrl.push(SignupPage);
  }

}
