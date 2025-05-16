import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../Services/Users.Service';

@Component({
  selector: 'app-project-list',
  standalone: false,
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent {
  selectedProject: { [key: string]: boolean } = {};
  projectList: string[]=[];
  

  constructor(
  public dialogRef: MatDialogRef<ProjectListComponent>,
  @Inject(MAT_DIALOG_DATA) public data: { projects: string[], user: any },
  public service:UsersService
) {

  this.projectList = data.projects;
}

   onSelect() {
    const selectedProjects = Object.keys(this.selectedProject)
      .filter(project => this.selectedProject[project]);
    this.dialogRef.close(selectedProjects); 
  }

  onCancel() {
    this.dialogRef.close(); 
  }
}
