import {Component, inject} from '@angular/core';
import {CommonModule} from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeComponent } from '../employee/employee.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [CommonModule, EmployeeComponent],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  
    employees: Employee[] = [];
    employeeService: EmployeeService = inject(EmployeeService);
    route: ActivatedRoute = inject(ActivatedRoute);
    departmentId: number = Number(this.route.snapshot.params['id']);
    departmentName: string = '';

  departmentMap: { [key: number]: string } = {
    1: 'IT Department',
    2: 'HR Department',
    3: 'Sales Department',
    4: 'Finance Department',
    5: 'Marketing Department',
    6: 'Operations Department',
    7: 'Support Department',
    8: 'Legal Department',
    9: 'Research Department'
  };
  
    constructor(){
      this.employees = this.employeeService.getEmployeeByDepartmentId(this.departmentId);
      this.departmentName = this.departmentMap[this.departmentId];
    }

}
