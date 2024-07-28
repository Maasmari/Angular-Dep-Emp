import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeComponent } from '../employee/employee.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [CommonModule, EmployeeComponent],
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
  
  employees: Employee[] = [];
  employeeService: EmployeeService = inject(EmployeeService);
  route: ActivatedRoute = inject(ActivatedRoute);
  departmentId: number = Number(this.route.snapshot.paramMap.get('id'));
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

  ngOnInit(): void {
    this.departmentName = this.departmentMap[this.departmentId];
    this.employeeService.getEmployeeByDepartmentId(this.departmentId).subscribe(
      (data: Employee[]) => {
        this.employees = data;
      },
      (error) => {
        console.error('Error fetching employees:', error);
      }
    );
  }

  constructor() {}
}