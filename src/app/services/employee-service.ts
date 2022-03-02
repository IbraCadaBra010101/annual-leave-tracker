import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from "../models/employee";

@Injectable()
export default class EmployeeService {

  public baseUrl = 'https://localhost:7138';
  public api = "/api";
  public employee = "/Employee"


  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Employee>> {
    return this.http.get<Array<Employee>>(`${this.baseUrl + this.api + this.employee}`);
  }

  // get(id: string) {
  //   return this.http.get(`${this.SUGARLEVELS_API}/${id}`);
  // }
  //
  // save(sugarLevel: SugarLevel): Observable<SugarLevel> {
  //   let result: Observable<SugarLevel>;
  //   if (sugarLevel.id) {
  //     result = this.http.put<SugarLevel>(
  //       `${this.SUGARLEVELS_API}/${sugarLevel.id}`,
  //       sugarLevel
  //     );
  //   } else {
  //     result = this.http.post<SugarLevel>(this.SUGARLEVELS_API, sugarLevel);
  //   }
  //   return result;
  // }
  //
  // remove(id: number) {
  //   return this.http.delete(`${this.SUGARLEVELS_API}/${id.toString()}`);
  // }
}
