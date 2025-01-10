import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeserviceService } from '../eservice/employeeservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  isDashboardLoggedIn: boolean = false;
  isEmployeeDashboardLoggedInq: boolean = false;
  isEmployeeDashboardLoggedIn: boolean=false;

  ngOnInit(): void {
    this.loadEmployees();
      this.isEmployeeDashboardLoggedIn = !!localStorage.getItem('currentUser');
      this.isEmployeeDashboardLoggedInq = !!localStorage.getItem('currentUser');
  }

  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  constructor(private employeeService: EmployeeserviceService,
    private router: Router) {}

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => (this.employees = data),
      error: (err) => console.error('Error fetching employees', err),
    });
  }

  // createEmployee(): void {
  //   const newEmployee: Employee = {
  //     id: 0, // ID will be generated by the backend
  //     name: 'New Employee',
  //     email: 'new.employee@example.com',
  //     phone: 1234567890,
  //     userType: 'staff',
  //     employeeType: 'full-time',
  //     joiningDate: new Date(),
  //     location: 'Default Location',
  //     username: 'newuser',
  //     password: 'password',
  //     isAdmin: false,
  //     organizationId: 1,
  //     designation: 'Intern',
  //   };

  //   this.employeeService.createEmployee(newEmployee).subscribe({
  //     next: () => this.loadEmployees(),
  //     error: (err) => console.error('Error creating employee', err),
  //   });
  // }

  // updateEmployee(employee: Employee): void {
  //   if (!employee.id) return;
  //   const updatedEmployee = { ...employee, name: 'Updated Name' };
  //   this.employeeService.updateEmployee(employee).subscribe({
  //     next: () => this.loadEmployees(),
  //     error: (err) => console.error('Error updating employee', err),
  //   });
  // }

  updateEmployee(id:number): void {
    this.router.navigate(['/update-emp',id]);
  }

  deleteEmployee(id: number): void {
    if (!id) return;
    alert("Employee deleted successfully");
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => this.loadEmployees(),
      error: (err) => console.error('Error deleting employee', err),
    });
  }
}
