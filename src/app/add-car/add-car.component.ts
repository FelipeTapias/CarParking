import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CarBody } from 'src/utils/models/car.model';
import { MatDialog } from '@angular/material/dialog';
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
        owner: this.ownerHtml
      };
      addForm.reset();
      console.log('Correct');
      localStorage.setItem(JSON.stringify(body.plate), JSON.stringify(body));

      this.openDialog();
      this.router.navigate(['/addCar']);

    }catch (e){
      console.log('#####ERROR#####');
    }

  }


}
