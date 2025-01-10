import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee';
import { EmployeeLeave } from '../employee-dashboard/employee-leave';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {

  private apiUrl ='http://localhost:8080/employees';
  constructor(private http: HttpClient) {}
  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/allEmp`);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/addEmp`, employee);
  }

  // updateEmployee(id: number, employee: Employee): Observable<Employee> {
  //   return this.http.put<Employee>(`${this.apiUrl}/${id}`, employee);
  // }

  updateEmployee(id:number, employee: Employee): Observable<any> {
    const url = `${this.apiUrl}/emp/${employee.id}`;
    return this.http.put(url, employee);
  }
  getEmployeeById(id: number): Observable<Employee>{
    return this.http.get<Employee>(`${this.apiUrl}/emp/${id}`);
  }
  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/emp/delete/${id}`);
  }

  private apiUrl1 ='http://localhost:8082/leaves';
 
  applyLeave(leaveApplication: EmployeeLeave): Observable<any> {
    const userId = leaveApplication.userId; // Get the userId from the payload
  
    if (!userId) {
      throw new Error('User ID is undefined or invalid.');
    }
  
    return this.http.post<any>(`${this.apiUrl}/addLeaves/${userId}`, leaveApplication);
  }
  
}
