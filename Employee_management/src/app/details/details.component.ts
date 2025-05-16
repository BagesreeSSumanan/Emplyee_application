import { Component } from '@angular/core';
import { UsersService } from '../../Services/Users.Service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
 constructor(private service:UsersService){}
 user:any;
  ngOnInit() {
    //this.user= this.service.getLoggedInUser();
    this.user =this.service.getLoggedInUser();
    console.log(this.user);
  }
}
