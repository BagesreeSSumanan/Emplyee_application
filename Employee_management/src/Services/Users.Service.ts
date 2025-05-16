import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({
     providedIn: 'root'
})
export class UsersService{
  loggeduser :any;
  private apiUrl = 'https://dummyjson.com/user/login';
  users = [
    { username: 'admin', password: 'admin123', role: 'admin',email:'admin@gmail.com' ,phone:'9820678930',project:'Employee management'},
    { username: 'employee1', password: 'employee123', role: 'employee', email:'employee1@gmail.com' ,phone:'9270678930',project:'Employee management'},
    { username: 'employee2', password: 'employee321', role: 'employee',email:'employee2@gmail.com',phone:'9878067893',project:'Employee management' }
  ];
  projects =['Leave management,Employee management ,Online shopping app']

  constructor(private router:Router,private http: HttpClient){}
  // validateUser(username:string, password:string){
  //   this.loggeduser = this.users.find(u => u.username === username && u.password === password);
  //   sessionStorage.setItem('loggedUser', JSON.stringify(this.loggeduser));
  //   return this.loggeduser;
  // }
  validateUser(username: string, password: string): Observable<any> {
    const body = {
      username,
      password,
      expiresInMins: 30
    };
    return this.http.post(this.apiUrl, body);
  }
    logout(){
    this.loggeduser='';
    this.router.navigate(['']);
    
  }
  getLoggedInUser() {
    // const userJson = sessionStorage.getItem('loggedUser');
    // this.loggeduser = userJson ? JSON.parse(userJson) : null;
    // return this.loggeduser;
    const token = sessionStorage.getItem('token');
    return token;
  }
  addUser(user: any) {
    this.users.push(user);
  }
}