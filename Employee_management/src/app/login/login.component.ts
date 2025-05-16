import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../Services/Users.Service';

@Component({
  selector: 'login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username:string ='';
  password:string ='';
  emptyValidation:boolean= false;
  invalidCred:boolean = false;
  errorMessage:string ='';
  constructor(private router:Router , private service:UsersService){}
  onLogin(){
    if (this.username && this.password) {
      console.log('Logging in with:', this.username, this.password);
      const user = this.service.validateUser(this.username,this.password);
       if(user){
          console.log('Login successful:', user);
          switch (user.role) {
          case 'admin':
           this.router.navigate(['/admin-dashboard']);
            break;

          case 'employee':
            this.router.navigate(['/Employee-dashboard']);
            break;
          }
       }
       else{
        this.errorMessage='Invalid Username or Password.';
       }
       
    } else {
      this.errorMessage = 'Username and Password is required';
    }
  }
}
