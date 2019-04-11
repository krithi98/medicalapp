import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenserviceProvider } from '../../providers/genservice/genservice';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  patientDetails: any;
  patientDetails1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private genService: GenserviceProvider) {
    this.patientDetails = JSON.parse(localStorage.getItem("user"));
    console.log("user", this.patientDetails);
    this.genService.getPatientDetails(this.patientDetails.id).subscribe((res) => {
      this.patientDetails1 = res;
      console.log("patient", res);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
