import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { RegisterComponent } from './register/register.component';
import { SuccessfulComponent } from './successful/successful.component';
import { DeleteComponent } from './delete/delete.component';
import { AdminComponent } from './admin/admin.component';
import { RoleComponent } from './role/role.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { ViewComponent } from './view/view.component';
import { WasherComponent } from './washer/washer.component';
import { WashviewComponent } from './washview/washview.component';
import { AdminplanComponent } from './adminplan/adminplan.component';
import { WashplanComponent } from './washplan/washplan.component';
import { AboutwashComponent } from './aboutwash/aboutwash.component';
import { WashcontactComponent } from './washcontact/washcontact.component';
import { AboutadminComponent } from './aboutadmin/aboutadmin.component';
import { AdmincontactComponent } from './admincontact/admincontact.component';



const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'about', component: AboutComponent},
  { path: 'washer', component: WasherComponent},
  { path: 'view', component: ViewComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'addDetails', component: CarDetailsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'success', component: SuccessfulComponent},
  { path: 'delete', component: DeleteComponent},
  { path: 'adminplan', component: AdminplanComponent},
  { path : 'washplan', component: WashplanComponent},
  { path : 'aboutwash', component: AboutwashComponent},
  { path : 'aboutadmin', component: AboutadminComponent},
  { path : 'washcontact', component: WashcontactComponent},
  { path : 'admincontact', component: AdmincontactComponent},
  { path: 'washview', component: WashviewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
