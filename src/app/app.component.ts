import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';


import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { Employee } from './Employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {


  organization() {
    this.router.navigate(['/organization'])
  }
  title = 'hrms';

  isDashboardLoggedIn: boolean = false;
  isDashboardLoggedInq: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.isDashboardLoggedIn = !!localStorage.getItem('currentUser');
    this.isDashboardLoggedInq = !!localStorage.getItem('currentUser');
  }

  onSignIn() {
    this.router.navigate(['/signup']);
  }

  onLogin() {
    this.router.navigate(['/signin']);
  }

  logout(): void {
    // Clear user data and navigate to login
    localStorage.removeItem('currentUser');
    this.isDashboardLoggedIn = false;
    this.router.navigate(['/signin']);
  }

  createEmployee() {
    this.router.navigate(['/addEmp']);
  }

  home() {
    this.router.navigate(['/dashboard/dashboard'])
  }

}