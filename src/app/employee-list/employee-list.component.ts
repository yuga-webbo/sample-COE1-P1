import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../models/employee';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
  // template: ` `,
  // styles: [``]
})
export class EmployeeListComponent implements OnInit {
  public employees:IEmployee[]=[];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit(): void {
    this._employeeService.getEmployees()
    .subscribe(data =>{console.log(data);this.employees = data});
  }

}
