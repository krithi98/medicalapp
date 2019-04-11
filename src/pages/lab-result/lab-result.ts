import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LabResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lab-result',
  templateUrl: 'lab-result.html',
})
export class LabResultPage {
  resultType: any;
  isPageType: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.resultType = this.navParams.get("result");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LabResultPage');
  }

}
