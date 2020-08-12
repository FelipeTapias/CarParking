import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { CarBody } from 'src/utils/models/car.model';
import { UserBody } from 'src/utils/models/user.model';

import { ConfirmAccountComponent } from '../confirm-account/confirm-account.component';



@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {

  brandHtml: string;
  plateHtml: string;
  modelYearHtml: number;
  ownerHtml: string;
  documentHtml: number;
  car: any;
  user: any;
  documentString: string;

  carForm: FormGroup;

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

  addCar(addForm){
    try{
      const body: CarBody = {
        brand: this.brandHtml,
        plate: this.plateHtml,
        modelYear: this.modelYearHtml,
        owner: this.ownerHtml,
        document: this.documentHtml
      };
      addForm.reset();
      console.log('Correct');
      console.log(`Everything is going well`);
      localStorage.setItem(JSON.stringify(body.plate), JSON.stringify(body));
      this.car = localStorage.getItem(JSON.stringify(body.plate));
      console.log(`Objeto carro: ${this.car}`);
      this.documentString = body.document.toString();
      this.user = JSON.parse(localStorage.getItem(this.documentString)); // Se asigna objeto
      console.log(`Traigo objeto con key: ${this.user}`);
      console.log(`Elemento de caja 1: ${this.user.box}`);
      console.log(`Voy a rellenar el bodyCarUser`);
      this.user.box = this.user.box - 1;
      console.log(`Elemento de caja 2: ${this.user.box}`);
      const bodyCarUser: UserBody = {
        name: this.user.name,
        document: this.user.document,
        age: this.user.age,
        password: this.user.password,
        box: this.user.box
      };
      localStorage.setItem(JSON.stringify(bodyCarUser.document), JSON.stringify(bodyCarUser));
      /*console.log(
      `Nuevo objeto de reemplazo: ${bodyCarUser},
      name: ${bodyCarUser.name},
      document: ${bodyCarUser.document},
      age: ${bodyCarUser.age},
      password: ${bodyCarUser.password},
      box: ${bodyCarUser.box}
      `);*/
      this.openDialog();
      this.router.navigate(['/addCar']);
      console.log(`I've finished`);

    }catch (e){
      console.log('#####ERROR#####');
    }

  }


}
