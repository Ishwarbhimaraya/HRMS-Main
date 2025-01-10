import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from '../organization';
import { OrgserviceService } from '../oservice/orgservice.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit{

  isDashboardLoggedIn: boolean = false;
  isDashboardLoggedInq: boolean = false;
  
  organs: Organization[] = [];
  selectedOrgans: Organization | null = null;

  constructor(private orgService: OrgserviceService,
    private router: Router) {}

  ngOnInit(): void {
    this.isDashboardLoggedIn = !!localStorage.getItem('currentUser');
    this.isDashboardLoggedInq = !!localStorage.getItem('currentUser');
    this.loadOrganizations();
  }

  loadOrganizations(): void {
    this.orgService.getOrgans().subscribe({
      next: (data) => (this.organs = data),
      error: (err) => console.error('Error fetching employees', err),
    });
  }

  organizations: Organization[] = []
  newOrganization: Organization = {
    id: 0,
    name: '',
    location: '',
    description: ''
  };

  // Method to handle adding a new organization
 
  addOrganizations() {
    this.router.navigate(['/addorga']);
  }

  deleteOrg(id: number): void {
    if (!id) return;
    alert("organization deleted successfully");
    this.orgService.deleteOrg(id).subscribe({
      next: () => this.loadOrganizations(),
      error: (err) => console.error('Error deleting employee', err),
    });
  }

  updateOrg(id:number): void {
    this.router.navigate(['/update-org',id]);
  }
}
