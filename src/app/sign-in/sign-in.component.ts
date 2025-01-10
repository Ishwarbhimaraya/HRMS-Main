import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';

import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent{
  employee: Employee | null = null;
  email: string = '';
  password: string = '';
  userType:string=''
  constructor(private loginService: SignupService, private router: Router,private http: HttpClient) {}
  
  credentials = { email: '', password: '' };
  
  // onLogin(credentials: { email: string; password: string }): void {
  //   this.loginService.loginUser(credentials).subscribe({
  //     next: (response: { status: string; message: string; employee: Employee }) => {
  //       if (response?.status === 'Success') {
  //            alert('Login Successful!');
  //           //  alert(`Welcome ${response.employee.name}!`);
  //           localStorage.setItem('currentUser', JSON.stringify(response.employee));
  //         // Navigate to the dashboard
  //         this.router.navigate(['/dashboard/dashboard']);
  //       } else {
  //         alert('Invalid Email or Password.');
  //       }
  //     },
  //     error: (error: any) => {
  //       console.error('Error:', error);
  //       alert('An error occurred during login. Please try again later.');
  //     }
  //   });
  // }

  onLogin(): void {
    const credentials = { email: this.email, password: this.password };
  
    // Check if email and password are provided
    if (!credentials.email || !credentials.password) {
      alert('Please provide both email and password.');
      return;
    }
  
    // Call the login service
    this.loginService.loginUser(credentials).subscribe({
      next: (response: any) => {
        if (response.status === 'Success') {
          const user = response.data;
          const isAdmin = user.admin;
  
          // Store user details in local storage
          localStorage.setItem('currentUser', JSON.stringify(user));
  
          // Navigate to the appropriate dashboard based on role
          if (isAdmin) {
            alert(response.message);
            this.router.navigate(['/dashboard/dashboard']); // Admin dashboard
          } else {
            alert(response.message);
            this.router.navigate(['/employee-dashboard'], {
              state: { user }, // Pass user details to employee dashboard
            });
          }
        } else {
          alert('Invalid Email or Password.');
        }
      },
      error: (err) => {
        console.error('Login API error:', err);
        alert('An error occurred during login. Please try again later.');
      },
    });
  }
  
   

  
  

}