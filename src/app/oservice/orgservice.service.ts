import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Organization } from '../organization';


@Injectable({
  providedIn: 'root'
})
export class OrgserviceService {
  
  private apiUrl ='http://localhost:8081/organs'
  constructor(private http: HttpClient) {}
  
  getOrgans(): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.apiUrl}/getAll`);
  }

  addOrganization(organization: Organization): Observable<Organization> {
    return this.http.post<Organization>(`${this.apiUrl}/addOrg`, organization);
  }
  
  deleteOrg(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }

  getOrgById(id:number): Observable<Organization[]> {
    return this.http.get<Organization[]>(`${this.apiUrl}/get/${id}`);
  }
 
  updateOrg(id: number, orga: Organization): Observable<Organization> {
    return this.http.put<Organization>(`${this.apiUrl}/update/${id}`, orga);
  }
}
