import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  @Input() employee!: Employee;

}
