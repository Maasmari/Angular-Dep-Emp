import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  url = 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';

  employees: Employee[] = [
    { id: 1, name: "John Doe", photo: this.url, departmentId: 1, email: "john.doe@example.com", phoneNumber: "+1234567890", jobTitle: "Software Engineer" },
    { id: 2, name: "Jane Smith", photo: this.url, departmentId: 1, email: "jane.smith@example.com", phoneNumber: "+1234567891", jobTitle: "UI Designer" },
    { id: 3, name: "Michael Johnson", photo: this.url, departmentId: 1, email: "michael.johnson@example.com", phoneNumber: "+1234567892", jobTitle: "System Analyst" },
    { id: 4, name: "Emily Brown", photo: this.url, departmentId: 1, email: "emily.brown@example.com", phoneNumber: "+1234567893", jobTitle: "Database Administrator" },
    { id: 5, name: "David Wilson", photo: this.url, departmentId: 1, email: "david.wilson@example.com", phoneNumber: "+1234567894", jobTitle: "Network Engineer" },

    { id: 6, name: "Jessica Lee", photo: this.url, departmentId: 2, email: "jessica.lee@example.com", phoneNumber: "+1234567895", jobTitle: "HR Manager" },
    { id: 7, name: "Matthew Martinez", photo: this.url, departmentId: 2, email: "matthew.martinez@example.com", phoneNumber: "+1234567896", jobTitle: "Recruiter" },
    { id: 8, name: "Olivia Garcia", photo: this.url, departmentId: 2, email: "olivia.garcia@example.com", phoneNumber: "+1234567897", jobTitle: "HR Assistant" },
    { id: 9, name: "Daniel Robinson", photo: this.url, departmentId: 2, email: "daniel.robinson@example.com", phoneNumber: "+1234567898", jobTitle: "HR Coordinator" },
    { id: 10, name: "Sophia Hernandez", photo: this.url, departmentId: 2, email: "sophia.hernandez@example.com", phoneNumber: "+1234567899", jobTitle: "Compensation Analyst" },

    { id: 11, name: "James Moore", photo: this.url, departmentId: 3, email: "james.moore@example.com", phoneNumber: "+1234567800", jobTitle: "Sales Manager" },
    { id: 12, name: "Isabella Young", photo: this.url, departmentId: 3, email: "isabella.young@example.com", phoneNumber: "+1234567801", jobTitle: "Sales Representative" },
    { id: 13, name: "Benjamin King", photo: this.url, departmentId: 3, email: "benjamin.king@example.com", phoneNumber: "+1234567802", jobTitle: "Account Executive" },
    { id: 14, name: "Mia Lopez", photo: this.url, departmentId: 3, email: "mia.lopez@example.com", phoneNumber: "+1234567803", jobTitle: "Business Development Manager" },
    { id: 15, name: "William Clark", photo: this.url, departmentId: 3, email: "william.clark@example.com", phoneNumber: "+1234567804", jobTitle: "Sales Coordinator" },

    { id: 16, name: "Charlotte Hall", photo: this.url, departmentId: 4, email: "charlotte.hall@example.com", phoneNumber: "+1234567805", jobTitle: "Financial Analyst" },
    { id: 17, name: "Jacob Scott", photo: this.url, departmentId: 4, email: "jacob.scott@example.com", phoneNumber: "+1234567806", jobTitle: "Accountant" },
    { id: 18, name: "Amelia Green", photo: this.url, departmentId: 4, email: "amelia.green@example.com", phoneNumber: "+1234567807", jobTitle: "Finance Manager" },
    { id: 19, name: "Ethan Adams", photo: this.url, departmentId: 4, email: "ethan.adams@example.com", phoneNumber: "+1234567808", jobTitle: "Financial Controller" },
    { id: 20, name: "Ava Baker", photo: this.url, departmentId: 4, email: "ava.baker@example.com", phoneNumber: "+1234567809", jobTitle: "Financial Planner" },

    { id: 21, name: "Liam Campbell", photo: this.url, departmentId: 5, email: "liam.campbell@example.com", phoneNumber: "+1234567810", jobTitle: "Marketing Manager" },
    { id: 22, name: "Chloe Nelson", photo: this.url, departmentId: 5, email: "chloe.nelson@example.com", phoneNumber: "+1234567811", jobTitle: "Digital Marketing Specialist" },
    { id: 23, name: "Noah Mitchell", photo: this.url, departmentId: 5, email: "noah.mitchell@example.com", phoneNumber: "+1234567812", jobTitle: "Marketing Analyst" },
    { id: 24, name: "Grace Baker", photo: this.url, departmentId: 5, email: "grace.baker@example.com", phoneNumber: "+1234567813", jobTitle: "Content Marketing Manager" },
    { id: 25, name: "Logan Carter", photo: this.url, departmentId: 5, email: "logan.carter@example.com", phoneNumber: "+1234567814", jobTitle: "SEO Specialist" },

    { id: 26, name: "Ella Hill", photo: this.url, departmentId: 6, email: "ella.hill@example.com", phoneNumber: "+1234567815", jobTitle: "Operations Manager" },
    { id: 27, name: "Alexander Ward", photo: this.url, departmentId: 6, email: "alexander.ward@example.com", phoneNumber: "+1234567816", jobTitle: "Supply Chain Analyst" },
    { id: 28, name: "Mason Flores", photo: this.url, departmentId: 6, email: "mason.flores@example.com", phoneNumber: "+1234567817", jobTitle: "Logistics Coordinator" },
    { id: 29, name: "Avery Collins", photo: this.url, departmentId: 6, email: "avery.collins@example.com", phoneNumber: "+1234567818", jobTitle: "Operations Coordinator" },
    { id: 30, name: "Abigail Price", photo: this.url, departmentId: 6, email: "abigail.price@example.com", phoneNumber: "+1234567819", jobTitle: "Warehouse Manager" },

    { id: 31, name: "Luke Sanders", photo: this.url, departmentId: 7, email: "luke.sanders@example.com", phoneNumber: "+1234567820", jobTitle: "Customer Support Manager" },
    { id: 32, name: "Madison Bell", photo: this.url, departmentId: 7, email: "madison.bell@example.com", phoneNumber: "+1234567821", jobTitle: "Technical Support Specialist" },
    { id: 33, name: "Gabriel Murphy", photo: this.url, departmentId: 7, email: "gabriel.murphy@example.com", phoneNumber: "+1234567822", jobTitle: "Help Desk Technician" },
    { id: 34, name: "Lily Howard", photo: this.url, departmentId: 7, email: "lily.howard@example.com", phoneNumber: "+1234567823", jobTitle: "Customer Service Representative" },
    { id: 35, name: "Jack Perry", photo: this.url, departmentId: 7, email: "jack.perry@example.com", phoneNumber: "+1234567824", jobTitle: "Client Success Manager" },

    { id: 36, name: "Natalie Cook", photo: this.url, departmentId: 8, email: "natalie.cook@example.com", phoneNumber: "+1234567825", jobTitle: "Legal Counsel" },
    { id: 37, name: "Ryan Richardson", photo: this.url, departmentId: 8, email: "ryan.richardson@example.com", phoneNumber: "+1234567826", jobTitle: "Paralegal" },
    { id: 38, name: "Samuel Wood", photo: this.url, departmentId: 8, email: "samuel.wood@example.com", phoneNumber: "+1234567827", jobTitle: "Compliance Officer" },
    { id: 39, name: "Victoria Bailey", photo: this.url, departmentId: 8, email: "victoria.bailey@example.com", phoneNumber: "+1234567828", jobTitle: "Legal Assistant" },
    { id: 40, name: "Christopher Cox", photo: this.url, departmentId: 8, email: "christopher.cox@example.com", phoneNumber: "+1234567829", jobTitle: "Contracts Manager" },

    { id: 41, name: "Emma Ward", photo: this.url, departmentId: 9, email: "emma.ward@example.com", phoneNumber: "+1234567830", jobTitle: "Research Scientist" },
    { id: 42, name: "Nicholas Stewart", photo: this.url, departmentId: 9, email: "nicholas.stewart@example.com", phoneNumber: "+1234567831", jobTitle: "Research Assistant" },
    { id: 43, name: "Grace Russell", photo: this.url, departmentId: 9, email: "grace.russell@example.com", phoneNumber: "+1234567832", jobTitle: "Data Analyst" },
    { id: 44, name: "Carter Hughes", photo: this.url, departmentId: 9, email: "carter.hughes@example.com", phoneNumber: "+1234567833", jobTitle: "Research Coordinator" },
    { id: 45, name: "Hannah Price", photo: this.url, departmentId: 9, email: "hannah.price@example.com", phoneNumber: "+1234567834", jobTitle: "Research Manager" }
];

getEmployeeByDepartmentId(departmentId: number): Employee[] {
  return this.employees.filter((employee) => employee.departmentId === departmentId); }

}
