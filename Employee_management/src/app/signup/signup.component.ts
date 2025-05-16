import { Component } from '@angular/core';
import { UsersService } from '../../Services/Users.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username:string ='';
  password:string ='';
  role: string = '';
  email:string='';
  phone:string= '';
  constructor(private service:UsersService,private router:Router){}
  CurrentUsers:any;
ngOnInit(){
   this.CurrentUsers= this.service.users;
   console.log(this.CurrentUsers);
}
onSignup(){
  const newUser = {
    username: this.username,
    password: this.password,
    role: this.role,
    email: this.email,
    phone: this.phone,
    project:'',
  };
  this.service.addUser(newUser);
  console.log('user:', this.service.users)
  this.router.navigate(['']);
}
}
