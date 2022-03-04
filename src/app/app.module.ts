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
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    BookingComponent,
    DepartmentComponent,
    UserComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar: true
    })
  ],
  providers: [DepartmentService, EmployeeService, BookingService, HttpClientModule,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
