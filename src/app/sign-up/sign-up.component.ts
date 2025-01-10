import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
  constructor(private signupService: SignupService, private router: Router) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  // Handle form submission
  onSubmit(formData: any) {
    const payload = {
      ...formData,
      organizationId: 101,
      admin: false
    };

    this.signupService.registerUser(payload).subscribe({
      next: (response) => {
        alert(response.message || 'Sign Up Successful!');
        this.router.navigate(['/signin']);
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Sign Up Failed. Please try again.');
      }
    });
  }
}
