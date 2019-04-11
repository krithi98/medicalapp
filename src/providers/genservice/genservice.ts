import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Observable } from 'rxjs/Observable';
/*
  Generated class for the GenserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GenserviceProvider {
  query = '';
  url = "https://hms-system.herokuapp.com/"
  constructor(private sqlite: SQLite, public http: HttpClient) {
    console.log('Hello GenserviceProvider Provider');
  }

  users: any;
  getUsers(): Observable<any> {
    return this.http.get(this.url + "users");
  }
  getUser(id): Observable<any> {
    return this.http.get(this.url + "users/" + id);
  }
  login(data): Observable<any> {
    return this.http.post(this.url + "users/login", data);
  }
  registerLocal(data): Observable<any> {
    return this.http.post(this.url + "users", data);
  }
  updatePatientDetail(data): Observable<any> {
    return this.http.post(this.url + "user_details", data);
  }
  // getPatientDetails(id): Observable<any> {
  //   return this.http.get(this.url + "user_details/" + id);
  // }
  getPatientDetails(id): Observable<any> {
    return this.http.get(this.url + "user_details/get_user_detail?id=" + id);
  }
  getAppoinments(user_id): Observable<any> {
    return this.http.get(this.url + "appoinments/get_user_appoinmnet?user_id=" + user_id);
  }
  addAppoinments(data): Observable<any> {
    return this.http.post(this.url + "appoinments", data);
  }
  addMedi(data): Observable<any> {
    return this.http.post(this.url + "prescriptions", data);
  }
  getMedi(user_id): Observable<any> {
    return this.http.get(this.url + "prescriptions/get_pres?user_id=" + user_id);
  }
  deleteMedi(id): Observable<any> {
    return this.http.delete(this.url + "prescriptions/" + id);
  }
}