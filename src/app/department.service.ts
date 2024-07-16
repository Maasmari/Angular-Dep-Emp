import { Injectable } from '@angular/core';
import { Department } from './department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  departments: Department[] = [
    { id: 1, name: 'IT Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrByBRHEQuu5YFYtpWxKOfdFBfXjJcU8WTQ&s`, },
    { id: 2, name: 'HR Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_TcSiaZH4uyUKE7XOyFW-_zoGh8io1-1yDg&s` },
    { id: 3, name: 'Sales Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIJ6CPQsGJ1qWxBuI7I-FLcSTzcQv3dj-pOQ&s` },
    { id: 4, name: 'Finance Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimZ1o5G5OUuQD_X9ynGQsmHt28l97-ArT_w&s` },
    { id: 5, name: 'Marketing Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU0u80khUiRiQclG_KgmBzhVrvmnHGQK8O5Q&s` },
    { id: 6, name: 'Operations Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD49UjM5iycfzVCuhgYXOTByP4_2o6hovqog&s` },
    { id: 7, name: 'Support Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-_XxWuIFJTIaffl8eAE81Gy23ELk5lScmw&s` },
    { id: 8, name: 'Legal Department', photo: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrVszC3LcBzDVMBNtURGrLQDB3gu6H4h2RdA&s` },
    { id: 9, name: 'Research Department', photo: `https://as1.ftcdn.net/v2/jpg/02/07/61/36/1000_F_207613616_Z3RGGnItfCCtLXztI5Oua2DpaDB77BgW.jpg`}
 ];
 getAllDepartments(): Department[] {
  return this.departments;
}
getDepartmentById(id: number): Department | undefined {
  return this.departments.find((department) => department.id === id);
}

  constructor() { }
}
