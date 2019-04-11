import { LoginPage } from './../login/login';
import { GenserviceProvider } from './../../providers/genservice/genservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
isAct = true;
  user: any = { fullname: "", email: "", password: "", mobile: "" };
  users: any;
  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController, private sqlite: SQLite, private genService: GenserviceProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register() {
  this.isAct = false;
    this.genService.registerLocal(this.user).subscribe(res => {
      console.log("user", JSON.stringify(res));
      if (res) {
      this.isAct = true;
        this.presentConfirm();
      } else {
      this.isAct = true;
        this.registerErrorToast("Please Try Again");
      }
    });

  }
  registerErrorToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      position: "bottom",
      duration: 3000
    });
    toast.present();
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Registration!',
      message: 'Register Completed..',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(LoginPage);
          }
        }
      ]
    });
    alert.present();
  }

}