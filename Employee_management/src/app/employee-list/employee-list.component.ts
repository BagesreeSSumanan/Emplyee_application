import { Component } from '@angular/core';
import { UsersService } from '../../Services/Users.Service';
import { ProjectListComponent } from '../project-list/project-list.component';
import { MatDialog } from '@angular/material/dialog';



@Component({
  selector: 'employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
    users: any[] = [];
  constructor(private service:UsersService,private dialog: MatDialog){
      this.users = this.service.users;
  }
  deleteUser(user: any) {
  this.users = this.users.filter(u => u !== user);
}
  Assign(user: any) {
  const Projects: any = this.service.projects;

  let projectArray: string[];
  projectArray = Projects.toString().split(',').map((p: string) => p.trim());

  const dialogRef = this.dialog.open(ProjectListComponent, {
    width: '400px',
    data: {
      projects: projectArray,
      user: user
    }
  });

  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed');
    if (result !== undefined) {
      console.log('Selected project:', result);
      user.project = result;
    }
  });
}

}
