import { Component, OnInit } from '@angular/core';


import { MatDialog, MatDialogRef} from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-togglebtn',
  templateUrl: './togglebtn.component.html',
  styleUrls: ['./togglebtn.component.css']
})
export class TogglebtnComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<TogglebtnComponent>,
    public dialog:MatDialog) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dialogRef.close();
  }
  openLoginForm() {
    this.dialog.open(LoginComponent);
  }

}
