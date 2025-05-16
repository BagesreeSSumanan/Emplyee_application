import { Component } from '@angular/core';
import { UsersService } from '../../Services/Users.Service';

@Component({
  selector: 'employee-dashboard',
  standalone: false,
  templateUrl: './employee-dashboard.component.html',
  styleUrl: './employee-dashboard.component.css'
})
export class EmployeeDashboardComponent {
constructor(private service:UsersService){}

  logout(){
    this.service.logout();
  }
}
