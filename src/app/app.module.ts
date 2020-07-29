import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './home-app/home-app.component';
import { RegisterUserComponent } from './register-user/register-user.component';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainUserComponent } from './main-user/main-user.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeAppComponent,
    RegisterUserComponent,
    MainUserComponent,
    ConfirmAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatSidenavModule
  ],
  entryComponents: [ConfirmAccountComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
