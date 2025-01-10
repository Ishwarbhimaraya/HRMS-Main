import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './auth.gaurd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { UpdateEmpComponent } from './update-emp/update-emp.component';
import { OrganizationComponent } from './organization/organization.component';
import { AddorgaComponent } from './addorga/addorga.component';
import { UpdateOrgComponent } from './update-org/update-org.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';






const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'dashboard/dashboard', component:DashboardComponent,canActivate: [AuthGuard]},
  
  { path: 'addEmp', component:AddEmpComponent},
  { path: 'update-emp/:id', component:UpdateEmpComponent},
  { path: 'organization', component:OrganizationComponent},
  { path: 'addorga', component:AddorgaComponent},
  { path: 'update-org/:id', component:UpdateOrgComponent},
  { path: 'employee-dashboard', component:EmployeeDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
