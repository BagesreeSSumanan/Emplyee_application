import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { DetailsComponent } from './details/details.component';
import { SignupComponent } from './signup/signup.component';
import{authGuard} from './auth.guard'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin-dashboard',component:AdminDashboardComponent,
    children: [
      { path: '', component: EmployeeListComponent}
    ]
  },
  {path:'Employee-dashboard',component:EmployeeDashboardComponent,canActivate: [authGuard] ,
    children: [
      { path: '', component: DetailsComponent}
    ]
  },
  {path:'signUp',component:SignupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
