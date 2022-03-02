import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {EmployeeComponent} from './employee/employee.component';
import {BookingComponent} from './booking/booking.component';
import {DepartmentComponent} from './department/department.component';
import BookingService from "./services/booking-service";
import EmployeeService from "./services/employee-service";
import DepartmentService from "./services/department-service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BookingComponent,
    DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DepartmentService, EmployeeService, BookingService, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
