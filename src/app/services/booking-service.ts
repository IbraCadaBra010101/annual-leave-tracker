import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Booking} from "../models/booking";
import { HttpClient } from '@angular/common/http';

@Injectable()
export default class BookingService {

  public baseUrl = 'https://localhost:7138';
  public api = "/api";
  public department = "/Booking"


  constructor(private http: HttpClient) {}

  getAll(): Observable<Array<Booking>> {
    return this.http.get<Array<Booking>>(`${this.baseUrl + this.api + this.department}`);
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
