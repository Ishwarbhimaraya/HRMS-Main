import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Organization } from '../organization';
import { OrgserviceService } from '../oservice/orgservice.service';

@Component({
  selector: 'app-addorga',
  templateUrl: './addorga.component.html',
  styleUrls: ['./addorga.component.css']
})
export class AddorgaComponent {
  organizations: Organization[] = [];
  newOrganization: Organization = {
    id: 0,
    name: '',
    location: '',
    description: ''
  };

  constructor(private organizationService: OrgserviceService,private router:Router) {}
  
  // onSubmit(): void {
  //   this.organizationService.addOrganization(this.newOrganization).subscribe(
  //     (data: Organization) => {
  //       // Push the newly created organization to the list
  //       this.organizations.push(data);
  //       alert('Organization added successfully!');
  //       this.router.navigate(['/organization'])
  //     },
  //     (error) => {
  //       console.error('Error adding organization', error);
  //       alert('Failed to add organization');
  //     }
  //   );
  // }

  onSubmit(): void {
    // Ensure the newOrganization object has the correct structure
    const organizationPayload = {
      id: this.newOrganization.id,
      name: this.newOrganization.name,
      location: this.newOrganization.location,
      description: this.newOrganization.description,
    };
  
    // Call the service to add the organization
    this.organizationService.addOrganization(organizationPayload).subscribe(
      (data: Organization) => {
        // Confirm the organization was added successfully
        alert('Organization added successfully!');
        
        // Navigate to the organization list page
        this.router.navigate(['/organization']);
      },
      (error) => {
        // Handle error appropriately
        console.error('Error adding organization:', error);
        alert('Failed to add organization. Please try again.');
      }
    );
  }
  
}
