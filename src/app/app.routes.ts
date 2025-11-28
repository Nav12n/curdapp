import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeePortalComponent } from './pages/employee-portal/employee-portal.component';

export const routes: Routes = [

    // {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'',component:LayoutComponent,
        children:[
            {path:'dashboard',component:DashboardComponent},
            {path:'employee',component:EmployeePortalComponent},
        ]
    },
];
