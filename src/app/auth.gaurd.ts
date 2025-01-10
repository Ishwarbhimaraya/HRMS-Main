import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const user = localStorage.getItem('currentUser');
    if (user) {
      return true; // Allow access to the route
    } else {
      alert('Access Denied! Please log in.');
      this.router.navigate(['/signin']); // Redirect to login if not authenticated
      return false;
    }
  }
}
