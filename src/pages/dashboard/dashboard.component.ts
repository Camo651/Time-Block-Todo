import { Component } from '@angular/core';
import { PageRouterService } from 'src/services/page-router.service';
import { UserdataService } from 'src/services/userdata.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(
    userDataService:UserdataService,
    pageRouterService:PageRouterService
  ) { }
  dashboardSize = 1;
  notebookActive = false;


  toggleNotebook() {
    this.notebookActive = !this.notebookActive;
  }
}
