import { FullscreenOverlayContainer } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { TogglebtnComponent } from '../togglebtn/togglebtn.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openLoginForm() {
    this.dialog.open(LoginComponent);
  }

  collapsed = true;
  openToggleBtn() {
    if(this.collapsed===true){
      this.dialog.open(TogglebtnComponent, { panelClass: 'custom-dialog-container' });
    }else{
      this.dialog.closeAll();
    }
    this.toggleCollapsed();
  }

  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}