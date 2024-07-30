import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmployeeAddPageComponent } from './employee-add-page/employee-add-page.component';

export const routes: Routes = [];
const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page',
    },
    {
      path: 'details/:id',
      component: DepartmentDetailsComponent,
      title: 'Department details',
    },
    {
      path : 'add-employee/:id',
      component : EmployeeAddPageComponent,
      title : 'Add Employee'
    }
  ];
  export default routeConfig;