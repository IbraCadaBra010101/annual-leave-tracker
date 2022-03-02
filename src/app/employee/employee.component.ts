import {Component, OnInit} from '@angular/core';
import EmployeeService from "../services/employee-service";
import {Employee} from "../models/employee";

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.sass']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService) {
  }

  employees: Employee[] = [];

  ngOnInit(): void {
    this._employeeService.getAll().subscribe({
      next: (employee) => {
        this.employees = employee;
        console.log(employee);
      },
      error: (err) => (console.log(err)),
    });
  }
}
