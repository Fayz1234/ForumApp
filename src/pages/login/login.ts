import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ForumListPage } from '../forum-list/forum-list';
import { SignupPage } from '../signup/signup';

//ADDITIONAL API
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

//NETWORKING HTTP MODULE IMPORT
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

//IMPORT LOCAL STORAGE
import { Storage } from '@ionic/storage';

//SECURiTY FEATURE: MD5 PASSWORD ENCRYPTION MODULE
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
    
        let valid = this.validateInput()
        
        if (valid){ this.goToHome() }
    
      }

      //VALIDATION
  validateInput(): Boolean{
    
    let valid = true

    if (this.inputCredentials.name.length < 1) {

      valid = false
      this.presentToast('Enter user name');
    
    }else if (this.inputCredentials.pasword.length < 6) {
      
      valid = false
      this.presentToast('Enter atleast 6 alphabet password.');
    
    }

    console.log('valid: ');
    console.log(valid);
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


  goToHome(){

    let loading = this.loadingCtrl.create({
      content: 'Login User, Please Wait...'
    });
    loading.present();

    let urlparamterString = "{%22email%22:2}";
    
    let url = 'http://introtoapps.com/datastore.php?action=load&appid=213442252&objectid=' + this.userInput.email;
    console.log(url)
    this.http.get(url).subscribe(data => {
      loading.dismiss()
      console.log(data)
      this.saveUserLocally();
      this.navCtrl.setRoot(ForumListPage);

  },(error) => {

    loading.dismiss()
    this.presentToast('User Not Found, Please SignUp.');
               });

  }

  //Local Storage Implementation
  saveUserLocally(){
    
    this.storage.set("user", this.inputCredentials.name)

  }

  signup(){
  	this.navCtrl.push(SignupPage);
  }

}
