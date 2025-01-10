import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Organization } from '../organization';
import { OrgserviceService } from '../oservice/orgservice.service';

@Component({
  selector: 'app-update-org',
  templateUrl: './update-org.component.html',
  styleUrls: ['./update-org.component.css']
})
export class UpdateOrgComponent implements OnInit {

  id!: number;
  constructor(private orgService: OrgserviceService,
    private route: ActivatedRoute,
    private router: Router) { }
  newOrganizations: Organization[]=[];
  newOrganization: Organization = {
    id: 0,
    name: '',
    location: '',
    description: ''
  };
  
  isDashboardLoggedIn: boolean = false;
  isDashboardLoggedInq: boolean = false;

 
  // ngOnInit(): void {
  //   this.id = this.route.snapshot.params['id'];
  //   // Call the service to fetch a single organization
  //   this.orgService.getOrgById(this.id).subscribe(
  //     (data: Organization) => {
  //       // Assign the fetched organization to `newOrganization`
  //       this.newOrganization = {
  //         id: data.id,
  //         name: data.name,
  //         location: data.location,
  //         description: data.description
  //       };
  //     },
  //     (error) => {
  //       console.error('Error fetching organization details:', error);
  //     }
  //   );
  // }

  ngOnInit(): void {
    this.isDashboardLoggedIn = !!localStorage.getItem('currentUser');
      this.isDashboardLoggedInq = !!localStorage.getItem('currentUser');
    this.id = this.route.snapshot.params['id'];
    this.orgService.getOrgById(this.id).subscribe(
      (data: Organization[] | Organization) => {
        if (Array.isArray(data)) {
          this.newOrganization = data[0]; // Pick the first organization if an array is returned
        } else {
          this.newOrganization = data; // Use the object directly if it's not an array
        }
      },
      (error) => console.error('Error fetching organization:', error)
    );
  }

  onSubmit() {
    this.orgService.updateOrg(this.id, this.newOrganization).subscribe(data => {
      alert("organization updated successfully")
      this.getOrgans();
    }
      , error => console.log(error));
  }
  getOrgans() {
    this.router.navigate(['/organization'])
  }
}
