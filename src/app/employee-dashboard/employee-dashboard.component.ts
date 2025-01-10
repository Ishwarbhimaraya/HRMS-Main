import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { EmployeeserviceService } from '../eservice/employeeservice.service';
import { EmployeeLeave } from './employee-leave';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent  {
  currentUser: any;
  leaveDates: Date[] = [];
  leaveReason: string = '';
  selectedDate: Date | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private leaveService: EmployeeserviceService // Inject the leave service
  ) {}

  ngOnInit(): void {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUser = JSON.parse(storedUser);
  
      if (!this.currentUser?.id) {
        console.error('User ID is missing in the stored user object.');
        alert('Unable to retrieve user information. Please log in again.');
        this.router.navigate(['/login']); // Redirect to login if needed
      }
    } else {
      console.error('No user information found in local storage.');
      alert('Unable to retrieve user information. Please log in again.');
      this.router.navigate(['/login']); // Redirect to login if needed
    }
  }
  

  // Handle date selection
  onDateSelect(date: Date): void {
    if (this.leaveDates.length === 0 || this.leaveDates.length === 2) {
      this.leaveDates = [date];
    } else {
      this.leaveDates.push(date);
      this.leaveDates.sort((a, b) => a.getTime() - b.getTime()); // Sort dates
    }
  }

  // Check if the user can apply for leave
  canApplyLeave(): boolean {
    return this.leaveDates.length === 2 && this.leaveReason.trim() !== '';
  }

  // Apply for leave
  applyLeave(): void {
    if (!this.currentUser?.id) {
      alert('User ID is not available. Please log in again.');
      return;
    }
  
    const leaveApplication: EmployeeLeave = {
      userId: this.currentUser.id, // Use the logged-in user's ID
      leaveDates: this.leaveDates,
      leaveReason: this.leaveReason,
      appliedOn: new Date(),
      status: 'Pending'
    };
  
    this.leaveService.applyLeave(leaveApplication).subscribe({
      next: (response) => {
        alert('Leave application submitted successfully!');
        console.log('Response:', response);
        this.resetForm();
      },
      error: (err) => {
        alert('Failed to submit leave application. Please try again.');
        console.error('Error:', err);
      }
    });
  }
  
  

  // Reset form
  resetForm(): void {
    this.leaveDates = [];
    this.leaveReason = '';
    this.selectedDate = null;
  }
}