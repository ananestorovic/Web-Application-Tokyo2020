import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ChangeYourPasswordComponent } from './change-your-password/change-your-password.component';
import { DelegateComponent } from './delegate/delegate.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LeaderComponent } from './leader/leader.component';
import {LoginComponent} from './login/login.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent },
  {path: 'change-your-password', component: ChangeYourPasswordComponent},
  {path: 'organizer', component: OrganizerComponent},
  {path: 'delegate', component: DelegateComponent},
  {path: 'leader', component: LeaderComponent},
  {path: '**', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
