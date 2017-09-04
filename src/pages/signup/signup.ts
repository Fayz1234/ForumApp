import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
Custom Pages
*/ 
import { ForumListPage } from '../forum-list/forum-list';

//NETWORKING HTTP MODULE IMPORT
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

//ADDITIONAL API
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

//SECURiTY FEATURE: MD5 PASSWORD ENCRYPTION MODULE
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
    
        let valid = this.validateInput()
        
        if (valid){ this.signUpUser() }    
    
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  signUpUser(){
    
    //PASSWORD MD5 ENCRYPTION
    let passwordmd5 = Md5.hashStr(this.inputCredentials.pasword).toString()
    console.log("password md5 is : " + passwordmd5)
    this.inputCredentials.pasword = passwordmd5
    this.inputCredentials.confirmPasword = passwordmd5

    console.log('user input:')
    console.log(this.inputCredentials)

    let loading = this.loadingCtrl.create({
      content: 'Creating User, Please Wait...'
    });
    loading.present();

    let url = 'http://introtoapps.com/datastore.php?action=save&appid=213442252&objectid='+this.inputCredentials.name+'&data=' + this.inputCredentials;
    console.log(url)
    this.http.post(url,  this.inputCredentials).subscribe(data => {
          console.log(data);
          loading.dismiss()
          if(data.ok){
            this.storage.set("user", this.inputCredentials);
            this.presentToast('User Successfully created.')
            this.navCtrl.setRoot(ForumListPage);
          }
          
    });

  }

  //VALIDATION
  validateInput(): Boolean{
    
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let valid = true

    if (this.inputCredentials.name.length < 1) {
      
        valid = false
        this.presentToast('Enter user name');
          
    }else  if(!re.test(this.inputCredentials.email)){
      
      this.presentToast('enter valid email.')
      valid = false;
    
    }else if (this.inputCredentials.pasword.length < 6) {
      
      valid = false
      this.presentToast('Enter atleast 6 alphabet password.');
    
    }else if(this.inputCredentials.pasword !== this.inputCredentials.confirmPasword){
      
      this.presentToast('password does not match.')
      valid = false;
    }

    return valid
  }


   //ADDITIONAL API, DISTINCTION FEATURE
   presentToast(withMessage: string) {
    let toast = this.toastCtrl.create({
      message: withMessage,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }


}
