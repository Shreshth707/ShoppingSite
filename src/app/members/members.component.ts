import { Component, OnInit } from '@angular/core';


import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  constructor(public dialog:MatDialog ) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent);
  }

}
