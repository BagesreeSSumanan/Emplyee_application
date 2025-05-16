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
      const user = this.service.validateUser(this.username,this.password).subscribe({
        next:(response)=>{
           sessionStorage.setItem('token', response.accessToken);
          console.log('token', response.accessToken)
        }
      });
       if(user){
          console.log('Login successful:', user);
          // switch (user.role) {
          // case 'admin':
          //  this.router.navigate(['/admin-dashboard']);
          //   break;

          // case 'employee':
          //   this.router.navigate(['/Employee-dashboard']);
          //   break;
          // }
          this.router.navigate(['/Employee-dashboard']);
       }
       else{
        this.errorMessage='Invalid Username or Password.';
       }
       
    } else {
      this.errorMessage = 'Username and Password is required';
    }
  }
}
