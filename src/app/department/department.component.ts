import { Component, OnInit } from '@angular/core';
import DepartmentService from "../services/department-service";
import {Department} from "../models/department";

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.sass']
})
export class DepartmentComponent implements OnInit {
  constructor(private _departmentService: DepartmentService) { }
  departments: Department[] = [];
  ngOnInit(): void {
    this._departmentService.getAll().subscribe({
      next: (departments) => {
        this.departments = departments;
        console.log(departments);
      },
      error: (err) => (console.log(err)),
    });
  }
}
