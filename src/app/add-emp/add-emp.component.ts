import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeserviceService } from '../eservice/employeeservice.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit{
  constructor(private employeeService: EmployeeserviceService,private router:Router) {}

  employees: Employee[] = [];

  newEmployee: Employee = {
    id: 0,
    name: '',
    email: '',
    phone: 0,
    userType: '',
    employeeType: '',
    joiningDate: new Date(),
    location: '',
    username: '',
    password: '',
    isAdmin: false,
    organizationId: 0,
    designation: '',
  };
  ngOnInit(): void {
    this.loadEmployees();
  }
  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => (this.employees = data),
      error: (err) => console.error('Error fetching employees:', err),
    });
  }
  
  createEmployee(): void {
    if (this.newEmployee.name && this.newEmployee.email) {
      this.employeeService.createEmployee(this.newEmployee).subscribe({
        next: (employee) => {
          alert('Employee created successfully!');
          this.router.navigate(['/dashboard/dashboard'])
          this.employees.push(employee); // Optionally, reload the employee list
          this.newEmployee = {
            id: 0,
            name: '',
            email: '',
            phone: 0,
            userType: '',
            employeeType: '',
            joiningDate: new Date(),
            location: '',
            username: '',
            password: '',
            isAdmin: false,
            organizationId: 0,
            designation: '',
          }; // Reset form
        },
        error: (err) => console.error('Error creating employee:', err),
      });
    } else {
      alert('Name and Email are required!');
    }
  }
  showPassword: boolean = false;

togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

}
