import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
Custom Pages
*/ 
import { ForumListPage } from '../forum-list/forum-list';

/* PROJECT 2 FEATURES IMPLEMENTATION IMPORTS REQUIRED */
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import {Md5} from 'ts-md5/dist/md5';


/**
 * Generated class for the SignupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  inputCredentials = { 'name' : '', 'email' : '', 'pasword' : '', 'confirmPasword': '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public storage: Storage, private toastCtrl: ToastController, public loadingCtrl: LoadingController) {
  }

  signUp(){
    
        let valid = this.validateInputData()
        
        if (valid){ this.signUpUser() }    
    
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  //Custom MEthods for Networking call and save user
  signUpUser(){
    
    //encrypt password to hide from server
    let encrypPassword = Md5.hashStr(this.inputCredentials.pasword).toString()
    this.inputCredentials.pasword = encrypPassword
    this.inputCredentials.confirmPasword = encrypPassword

    console.log('user input:')
    console.log(this.inputCredentials)

    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();

    let url = 'http://introtoapps.com/datastore.php?action=save&appid=213442252&objectid='+this.inputCredentials.name+'&data=' + JSON.stringify( this.inputCredentials);
    console.log(url)
    this.http.post(url,  this.inputCredentials).subscribe(data => {
          console.log(data);
          loading.dismiss()
          if(data.ok){
    
            //local storage of user, to maintain app state
            this.storage.set("saved_user", this.inputCredentials.name)
            this.showAlert('User Successfully created.')
            this.navCtrl.setRoot(ForumListPage);
          }
          
    });

  }

  
  validateInputData(): Boolean{
    
    var email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let valid = true

    if (this.inputCredentials.name.length < 1) {
      
        valid = false
        this.showAlert('Enter user name');
          
    }else  if(!email.test(this.inputCredentials.email)){
      
      this.showAlert('enter valid email.')
      valid = false;
    
    }else if (this.inputCredentials.pasword.length < 6) {
      
      valid = false
      this.showAlert('Enter atleast 6 alphabet password.');
    
    }else if(this.inputCredentials.pasword !== this.inputCredentials.confirmPasword){
      
      this.showAlert('password does not match.')
      valid = false;
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


}
