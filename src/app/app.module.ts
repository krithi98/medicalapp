import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { SplashPage } from './../pages/splash/splash';
import { PatentDetailPage } from './../pages/patent-detail/patent-detail';
import { ProfilePage } from './../pages/profile/profile';
import { RegisterPage } from './../pages/register/register';
import { PatientVitalPage } from './../pages/patient-vital/patient-vital';
import { AllergyPage } from './../pages/allergy/allergy';
import { PrescriptionPage } from './../pages/prescription/prescription';
import { LabTestPage } from './../pages/lab-test/lab-test';
import { HttpClientModule } from "@angular/common/http";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GenserviceProvider } from '../providers/genservice/genservice';
import { LabResultPage } from '../pages/lab-result/lab-result';
import { AppointmentBookingPage } from './../pages/appointment-booking/appointment-booking';
import { PatientListPage } from './../pages/patient-list/patient-list';
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    ListPage,
    SplashPage,
    PatentDetailPage,
    ProfilePage,
    RegisterPage,
    PatientVitalPage,
    AllergyPage,
    PrescriptionPage,
    LabTestPage,
    LabResultPage,
    AppointmentBookingPage,
    PatientListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ListPage,
    SplashPage,
    PatentDetailPage,
    ProfilePage,
    RegisterPage,
    PatientVitalPage,
    AllergyPage,
    PrescriptionPage,
    LabTestPage,
    LabResultPage,
    AppointmentBookingPage,
    PatientListPage
  ],
  providers: [
    StatusBar,
    SplashScreen, SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    GenserviceProvider
  ]
})
export class AppModule { }
