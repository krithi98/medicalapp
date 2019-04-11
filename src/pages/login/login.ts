import { RegisterPage } from './../register/register';
import { ListPage } from './../list/list';
import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  MenuController,
  ToastController
} from "ionic-angular";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { GenserviceProvider } from './../../providers/genservice/genservice';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  loginData: any = {};
  users: any;
  constructor(private genService: GenserviceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController, private sqlite: SQLite) {

  }
  init() {
  }
  login() {
    this.genService.login(this.loginData).subscribe(res => {
      if (res.status) {
        localStorage.setItem("user", JSON.stringify(res.data));
        this.loginErrorToast("Login Successfully" + res.data.fullname);
        this.navCtrl.setRoot(ListPage);
      } else {
        this.loginErrorToast("Username or Password incorrect");
      }
    })

  }
  loginErrorToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      position: "bottom",
      duration: 3000
    });
    toast.present();
  }
  register() {
    this.navCtrl.push(RegisterPage)
  }

  ionViewDidLoad() {
    this.init();
  }

}