import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../Services/EmployeeServices/employee';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../Services/EmployeeServices/employee.service';

@Component({
  selector: 'app-employee-add-page',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './employee-add-page.component.html',
  styleUrls: ['./employee-add-page.component.css'] // Corrected from 'styleUrl' to 'styleUrls'
})
export class EmployeeAddPageComponent {
  departmentName: string = '';
  route: ActivatedRoute = inject(ActivatedRoute);
  department_id: number = Number(this.route.snapshot.paramMap.get('id'));
  employeeService: EmployeeService = inject(EmployeeService);

  constructor() {}

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
    // Get the department id from the URL
    this.department_id = Number(this.route.snapshot.paramMap.get('id'));
    this.departmentName = this.departmentMap[this.department_id];
  }

  onSubmit(form: NgForm) {
    const newEmployee: Employee = {
      name: form.value.name,
      email: form.value.email,
      job_title: form.value.job_title,
      phone_number: form.value.phone_number,
      department_id: this.department_id,
      id: null,
      photo: 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
    };

    this.employeeService.addNewEmployee(newEmployee).subscribe(
      (data: Employee) => {
        console.log('New Employee added:', data);
        form.reset();
      },
      (error) => {
        console.error('Error adding new employee:', error);
      }
    );
  }
}