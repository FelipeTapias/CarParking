import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserBody } from 'src/utils/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAccountComponent } from '../confirm-account/confirm-account.component';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  nameHtml: string;
  documentHtml: number;
  ageHtml: number;
  passwordHtml: any;
  boxHtml = 10;

  userForm: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ConfirmAccountComponent, {});
  }

  RegisterUser(registerForm){
    try{
     const body: UserBody = {
       name: this.nameHtml,
       document: this.documentHtml,
       age: this.ageHtml,
       password: this.passwordHtml,
       box: this.boxHtml
     };
     registerForm.reset();

     console.log('Correct');
     localStorage.setItem(JSON.stringify(body.document), JSON.stringify(body));

     this.openDialog();

     this.router.navigate(['/mainUser']);
    }catch (e){
      console.log('#####ERROR#####');
    }

  }



}
