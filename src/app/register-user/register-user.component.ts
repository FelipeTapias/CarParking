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

  form: FormGroup;

  constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router
  ) { }

  userForm: FormGroup;

  onResetForm(){
    this.userForm.reset();
  }

  ngOnInit(): void {
  }

  openDialog(): void {
    this.dialog.open(ConfirmAccountComponent, {});
  }

  RegisterUser(registerForm){
     const body: UserBody = {
       name: this.nameHtml,
       document: this.documentHtml,
       age: this.ageHtml,
       password: this.passwordHtml
     };
     registerForm.reset();
     const usuario = [];
     usuario.push(
       {
        name: body.name,
        document: body.document,
        age: body.age,
        password: body.password
       }
     );
     console.log(usuario);

     this.openDialog();

     this.router.navigate(['/mainUser']);

  }



}
