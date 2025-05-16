import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable({
     providedIn: 'root'
})
export class UsersService{
  loggeduser :any;
  users = [
    { username: 'admin', password: 'admin123', role: 'admin',email:'admin@gmail.com' ,phone:'9820678930',project:'Employee management'},
    { username: 'employee1', password: 'employee123', role: 'employee', email:'employee1@gmail.com' ,phone:'9270678930',project:'Employee management'},
    { username: 'employee2', password: 'employee321', role: 'employee',email:'employee2@gmail.com',phone:'9878067893',project:'Employee management' }
  ];
  projects =['Leave management,Employee management ,Online shopping app']

  constructor(private router:Router){}
  validateUser(username:string, password:string){
    this.loggeduser = this.users.find(u => u.username === username && u.password === password);
    sessionStorage.setItem('loggedUser', JSON.stringify(this.loggeduser));
    return this.loggeduser;
  }
    logout(){
    this.loggeduser='';
    this.router.navigate(['']);
    
  }
  getLoggedInUser() {
    const userJson = sessionStorage.getItem('loggedUser');
    this.loggeduser = userJson ? JSON.parse(userJson) : null;
    return this.loggeduser;
  }
  addUser(user: any) {
    this.users.push(user);
  }
}