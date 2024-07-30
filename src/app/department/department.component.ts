import { Component, Input} from '@angular/core';
import { Department } from '../Services/DepartmentServices/department';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './department.component.html',
  styleUrl: './department.component.css'
})
export class DepartmentComponent {
  @Input() department!: Department;

}
