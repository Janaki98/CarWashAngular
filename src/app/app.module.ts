import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserLoginService } from './user-login.service';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarDetailsComponent,
    RegisterComponent,
    SuccessfulComponent,
    DeleteComponent,
    AdminComponent,
    RoleComponent,
    ProfileComponent,
    AboutComponent,
    ViewComponent,
    WasherComponent,
    WashviewComponent,
    AdminplanComponent,
    WashplanComponent,
    AboutwashComponent,
    WashcontactComponent,
    AboutadminComponent,
    AdmincontactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [UserLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
