import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LabResultPage } from '../lab-result/lab-result';

/**
 * Generated class for the LabTestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-test',
  templateUrl: 'lab-test.html',
})
export class LabTestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabTestPage');
  }
  openPage(p) {
    this.navCtrl.push(LabResultPage, { result: p })
  }

}
