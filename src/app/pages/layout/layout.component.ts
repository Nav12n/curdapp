import { Component } from '@angular/core';
import { EmployeePortalComponent } from "../employee-portal/employee-portal.component";
import { DashboardComponent } from "../dashboard/dashboard.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [EmployeePortalComponent, DashboardComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
