import { PatentDetailPage } from './../patent-detail/patent-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GenserviceProvider } from './../../providers/genservice/genservice';
/**
 * Generated class for the PatientListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-patient-list',
  templateUrl: 'patient-list.html',
})
export class PatientListPage {
  patentList = []
  users: any = [];
  constructor(private genService: GenserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.genService.getUsers().subscribe((res) => {
      if (res) {
        console.log("res users", res);
        this.users = res;
      } else {
        alert("Try Again")
      }
    });
    console.log("user list1", JSON.stringify(this.genService.getUsers()));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientListPage');
    console.log("user list2", JSON.stringify(this.genService.getUsers()));
  }
  userSelected(user) {
    this.navCtrl.push(PatentDetailPage, { user: user });
  }
}
