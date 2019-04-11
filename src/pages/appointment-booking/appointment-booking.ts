import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GenserviceProvider } from '../../providers/genservice/genservice';

/**
 * Generated class for the AppointmentBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-booking',
  templateUrl: 'appointment-booking.html',
})
export class AppointmentBookingPage {
  appoinments: any = [];
  isAdd: false;
  appointment = {};
  dctrs = ["Arun","Alavuthin", "Basha",  "Manisankar", "Tennis", "Jothi", "Manoj"]
  constructor(private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, private genService: GenserviceProvider) {
    let user_det = JSON.parse(localStorage.getItem("user"))
    this.appointment['user_id'] = user_det.id;
    this.getApp();
  }
  getApp() {
    this.genService.getAppoinments(this.appointment['user_id']).subscribe(res => {
      res.map(rr => {
      rr.doctor = this.dctrs[Math.floor(Math.random() * this.dctrs.length)]
        this.appoinments.push(rr)
      })
      console.log("appoinment", res);
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentBookingPage');
  }
  addApp() {
    this.genService.addAppoinments(this.appointment).subscribe(res => {
      if (res) {
        this.presentConfirm();
      }
    })
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Appoinment!',
      message: 'Appinment booked successful..',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.isAdd = false;
            this.getApp();
          }
        }
      ]
    });
    alert.present();
  }

}
