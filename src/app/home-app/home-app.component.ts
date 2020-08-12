import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginBody } from 'src/utils/models/loginUser.model';
import { MatDialog } from '@angular/material/dialog';
import { ModelLoginComponent } from '../model-login/model-login.component';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {
  documentHtml: number;
  passwordHtml: string;
  documentStringLog: string;
  user: any;
  logForm: FormGroup;
  documentString: string;

constructor(
    public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
){

  }

ngOnInit(): void {

}

openDialog(){
  this.dialog.open(ModelLoginComponent, {});
}
enterForm(loginForm){
  try{
    console.log('entre al try');
    const body: LoginBody = {
      document: this.documentHtml,
      password: this.passwordHtml
    };
    console.log(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ ${JSON.stringify(body)}`);
    this.documentString = body.document.toString();
    console.log(`%%%%%%%%%%% ${this.documentString}`);
    this.documentStringLog = this.documentHtml.toString();
    console.log(`%%%%%%%%%%% ${this.documentStringLog}`);
    loginForm.reset();
    console.log('reseteo el formulario');
    console.log(`localstorage = ${localStorage.getItem(this.documentString)}`);
    this.user = JSON.parse(localStorage.getItem(this.documentString));

    console.log(this.user !== null);
    console.log('Object', this.user.password);
    console.log(typeof(this.user.password));
    console.log('Html', body.password);
    console.log( typeof(body.password));


    if (this.user !== null && this.user.password === body.password) {
      console.log('Login user correct');
      console.log(this.documentString);
      console.log(this.user);
      this.documentStringLog === this.user.document.toString() ?
      this.router.navigate(['/mainUser']) : '';
      console.log(`Contraseña del login: ${this.user.password}`);
    }else {
      console.log('Login incorrect');
      this.router.navigate(['/homeApp']);
      this.openDialog();
    }

  }catch (e){
    console.log('#####ERROR#####');
    console.log(`User ${this.documentStringLog} not is registered`);
    this.router.navigate(['/homeApp']);
    this.openDialog();
  }
}


}




