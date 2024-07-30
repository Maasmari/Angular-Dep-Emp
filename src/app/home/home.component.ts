import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from '../department/department.component';
import { Department } from '../Services/DepartmentServices/department';
import { DepartmentService } from '../Services/DepartmentServices/department.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DepartmentComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  departments: Department[] = [];
  departmentService: DepartmentService = inject(DepartmentService);

  constructor() {
    this.departmentService.getDepartmentList().subscribe((data) => {
      this.departments = data;
    });
  }

}