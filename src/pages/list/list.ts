import { GenserviceProvider } from './../../providers/genservice/genservice';
import { PatentDetailPage } from './../patent-detail/patent-detail';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Nav } from 'ionic-angular';
import { AppointmentBookingPage } from '../appointment-booking/appointment-booking';
import { PrescriptionPage } from '../prescription/prescription';
import { LabResultPage } from '../lab-result/lab-result';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  patentList = []
  users: any = [];
  constructor(private genService: GenserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.patentList = [{ name: "mani", age: '25', height: "5.8", weight: "60", gender: "Male", bpcount: "10", bgroup: "B+ve", patent_id: "1" }, { name: "partent 2", age: '30', height: "5.0", weight: "58", gender: "Male", bpcount: "10", bgroup: "o+ve", patent_id: "1" }]
    this.users = this.genService.getUsers()
  }
  selectpatent(patent) {
    localStorage.setItem("patent", patent);
    this.navCtrl.push(PatentDetailPage)
  }
  openPage(p) {
    if (p == "app") {
      this.navCtrl.push(AppointmentBookingPage)
    }
    if (p == "pre") {
      this.navCtrl.push(PrescriptionPage)
    }
    if (p == "blood") {
      this.navCtrl.push(LabResultPage, { result: "Blood" })
    }
  }
}
