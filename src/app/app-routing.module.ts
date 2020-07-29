import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeAppComponent } from './home-app/home-app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MainUserComponent } from './main-user/main-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'homeApp', pathMatch: 'full'},
  { path: 'homeApp', pathMatch: 'full', component: HomeAppComponent },
  { path: 'register', pathMatch: 'full', component: RegisterUserComponent },
  { path: 'mainUser', pathMatch: 'full', component: MainUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
