import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeserviceService } from '../eservice/employeeservice.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  id: number;

  employee: Employee = {
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
    designation: '',
    organizationId: 0
  };

  showPassword: boolean = false;

togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

  constructor(private employeeService: EmployeeserviceService,
    private route: ActivatedRoute,
    private router: Router) { }

    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
      this.employeeService.getEmployeeById(this.id).subscribe(data => {
        this.employee = data;
      }, error => console.log(error));
    }

    onSubmit(){
      this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
        alert("Employee updated successfully")
        this.getEmployeeList();
      }
      , error => console.log(error));
    }
    getEmployeeList(){
      this.router.navigate(['/dashboard/dashboard']);
    }
}
