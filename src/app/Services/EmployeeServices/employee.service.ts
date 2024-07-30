import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/employees';

  constructor(private http: HttpClient) {}

  getEmployeeByDepartmentId(department_id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/department/${department_id}`);
  }

  addNewEmployee(employee: Employee): Observable<Employee> {
    console.log('Adding new employee:', employee);
    return this.http.post<Employee>(`${this.baseUrl}/save`, employee);
  }
}