import { PatientVitalPage } from './../patient-vital/patient-vital';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { GenserviceProvider } from './../../providers/genservice/genservice';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/**
 * Generated class for the PatentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patent-detail',
  templateUrl: 'patent-detail.html',
})
export class PatentDetailPage {
  baseDetails: any = {};
  isShow: any = false;
  patientDetails = { user_id: '', name: "", email: "", mobile: "", age: "", sex: "", bp: "", sugar: "", tempratore: "", height: "", weight: "", last_visit: "" };
  isEdit = true;
  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController, private sqlite: SQLite, public navCtrl: NavController, private genService: GenserviceProvider, public navParams: NavParams) {
    let user = this.navParams.get("user")
    console.log("user", user);
    let user_det = JSON.parse(localStorage.getItem("user"))
    if (user.id) {
    this.isShow = false;
      this.isEdit = false;
      this.getPatient(user_det.id);
      this.getPatientDetails(user_det.id);
    }
    if (user == "user") {
    this.isShow = true;
      this.getPatient(user_det.id);
      this.getPatientDetails(user_det.id);
    }


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatentDetailPage');
  }
  getPatient(id) {
    this.genService.getUser(id).subscribe(res => {
      console.log("res", res);
      if (res) {
        this.baseDetails = res;
      }
    });
  }
  getPatientDetails(id) {
    this.genService.getPatientDetails(id).subscribe(res => {
      if (res) {
        this.patientDetails = res;
      }

    })
  }
  updateDetails() {
    this.patientDetails.user_id = this.baseDetails.id;

    this.genService.updatePatientDetail(this.patientDetails).subscribe(res => {
      console.log("patient", JSON.stringify(res));
      if (res) {
        this.presentConfirm();
      } else {
        this.updateErrorToast("Please Try Again");
      }
    });

  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Update Patient Vital!',
      message: 'Patient Update Completed..',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.setRoot(PatientVitalPage);
          }
        }
      ]
    });
    alert.present();
  }
  updateErrorToast(message) {
    const toast = this.toastCtrl.create({
      message: message,
      position: "bottom",
      duration: 3000
    });
    toast.present();
  }

}
