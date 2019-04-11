import { GenserviceProvider } from './../../providers/genservice/genservice';
import { PatentDetailPage } from './../patent-detail/patent-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PatientVitalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-vital',
  templateUrl: 'patient-vital.html',
})
export class PatientVitalPage {
  patientDetails: any;
  patientDetails1: any;

  constructor(public genService: GenserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.patientDetails = JSON.parse(localStorage.getItem("user"));
    console.log("user", this.patientDetails);
    this.genService.getPatientDetails(this.patientDetails.id).subscribe((res) => {
      this.patientDetails1 = res;
      console.log("patient", res);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientVitalPage');
  }
  updateVital() {
    this.navCtrl.push(PatentDetailPage, { user: "user" });
  }

}