import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../Employee';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private apiUrl = 'http://localhost:8080/employees/addEmp'; // Replace with your API URL

  constructor(private http: HttpClient) {}
  // Function to call the signup API
  registerUser(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
  private apiUrl1 = 'http://localhost:8083/auth/login'; 
  loginUser(credentials: { email: string; password: string }): Observable<{ status: string; message: string; employee: Employee }> {
    return this.http.post<{ status: string; message: string; employee: Employee }>(this.apiUrl1, credentials);
  }

}
