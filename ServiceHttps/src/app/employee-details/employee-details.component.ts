import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: `./employee-details.component.html`
})
export class EmployeeDetailsComponent implements OnInit {
  public employees = [];

  constructor() {}

  ngOnInit() {}
}
