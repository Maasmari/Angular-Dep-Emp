import { Injectable } from '@angular/core';
import { Department } from './department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private baseUrl = 'http://localhost:8080/departments';

  constructor(private http: HttpClient) {}

  getDepartmentList(): Observable<Department[]> {
    return this.http.get<Department[]>(this.baseUrl);
  }
}
