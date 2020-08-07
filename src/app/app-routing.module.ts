import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeAppComponent } from './home-app/home-app.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MainUserComponent } from './main-user/main-user.component';
import { AddCarComponent } from './add-car/add-car.component';
import { SeeCarsComponent } from './see-cars/see-cars.component';


const routes: Routes = [
  { path: '', redirectTo: 'homeApp', pathMatch: 'full'},
  { path: 'homeApp', pathMatch: 'full', component: HomeAppComponent },
  { path: 'register', pathMatch: 'full', component: RegisterUserComponent },
  { path: 'mainUser', pathMatch: 'full', component: MainUserComponent },
  { path: 'addCar', pathMatch: 'full', component: AddCarComponent },
  { path: 'seeCar', pathMatch: 'full', component: SeeCarsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
