import { Component } from '@angular/core';
import { UsersService } from '../../Services/Users.Service';


@Component({
  selector: 'admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  constructor(private service:UsersService){}

  logout(){
    this.service.logout();
  }
}
