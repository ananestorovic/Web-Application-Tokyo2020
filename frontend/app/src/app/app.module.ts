import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ChangeYourPasswordComponent } from './change-your-password/change-your-password.component';
import { HttpClientModule } from '@angular/common/http';
import { OrganizerComponent } from './organizer/organizer.component';
import { DelegateComponent } from './delegate/delegate.component';
import { LeaderComponent } from './leader/leader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    ChangeYourPasswordComponent,
    OrganizerComponent,
    DelegateComponent,
    LeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
