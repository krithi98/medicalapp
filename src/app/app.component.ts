import { PatentDetailPage } from './../pages/patent-detail/patent-detail';
import { SplashPage } from './../pages/splash/splash';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { PatientVitalPage } from './../pages/patient-vital/patient-vital';
import { AllergyPage } from './../pages/allergy/allergy';
import { PrescriptionPage } from './../pages/prescription/prescription';
import { LabResultPage } from '../pages/lab-result/lab-result';
import { AppointmentBookingPage } from './../pages/appointment-booking/appointment-booking';
import { ProfilePage } from './../pages/profile/profile';
import { PatientListPage } from './../pages/patient-list/patient-list';
import { LabTestPage } from '../pages/lab-test/lab-test';
export interface PageInterface { title: string, component: any, icon: string }
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: PageInterface[] = [
    { title: 'Dashboard', component: ListPage, icon: "md-apps" },
    { title: 'Patient Vital', component: PatientVitalPage, icon: "analytics" },
    { title: 'Allergy', component: AllergyPage, icon: "bug" },
    { title: 'Prescription', component: PrescriptionPage, icon: "medical" },
    { title: 'Lab Test', component: LabTestPage, icon: "color-fill" },
    // { title: 'Lab Result', component: LabResultPage, icon: "document" },
    { title: 'Appointment', component: AppointmentBookingPage, icon: "medkit" },
    { title: 'Profile', component: ProfilePage, icon: "person" },
    { title: 'Patient List', component: PatientListPage, icon: "people" }
  ];

  constructor(private sqlite: SQLite, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public modalCtrl: ModalController) {
    this.initializeApp();
    // used for an example of ngFor and navigation

  }

  initializeApp() {
    let user = localStorage.getItem("user");
    console.log("user", user);
    if (user == undefined) {
      this.rootPage = LoginPage;
    } else {
      this.rootPage = ListPage;
    }

    this.platform.ready().then(() => {
      this.splashScreen.hide();
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // let splash = this.modalCtrl.create(SplashPage);
      // splash.present();

      this.statusBar.backgroundColorByHexString("#f77062");


    });
  }

  openPage(page: PageInterface) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  logout() {
    localStorage.clear();
    this.nav.setRoot(LoginPage);
  }
}
