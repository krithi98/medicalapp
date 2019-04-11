import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GenserviceProvider } from '../../providers/genservice/genservice';

/**
 * Generated class for the PrescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prescription',
  templateUrl: 'prescription.html',
})
export class PrescriptionPage {
  isAdd = false;
  medi = {};
  allMedicin: any;
  user_det = JSON.parse(localStorage.getItem("user"))
  constructor(private genService: GenserviceProvider, private alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
    this.getmedi();
  }
  getmedi() {
  //  this.genService.getMedi(this.user_det.id).subscribe(res => {
    //  this.allMedicin = res;
    //})
    this.allMedicin = [{"id":1,"medican":"Paracetamol","qty":"2","desc":"Before Lunch and Dinner","user_id":1,"created_at":"2019-03-16T05:03:35.442Z","updated_at":"2019-03-16T05:03:35.442Z"},{"id":2,"medican":"Acetaminophen","qty":"2","desc":"Daily evening","user_id":1,"created_at":"2019-03-17T05:08:24.504Z","updated_at":"2019-03-17T05:08:24.504Z"}, {"id":3,"medican":"Aspirin","qty":"2","desc":"Daily evening","user_id":1,"created_at":"2019-03-17T05:08:24.504Z","updated_at":"2019-03-17T05:08:24.504Z"}]
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrescriptionPage');
  }
  addApp() {
    this.medi['user_id'] = this.user_det.id;
    this.genService.addMedi(this.medi).subscribe(res => {
      if (res) {
        this.presentConfirm();
      }
    })
  }
  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Prescription!',
      message: 'Prescription Added Completed..',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.isAdd = false;
            this.getmedi();
          }
        }
      ]
    });
    alert.present();
  }
  deletePres(id) {
    this.genService.deleteMedi(id).subscribe(res => {
      console.log("res", res);
      this.getmedi();
    })
  }
}
