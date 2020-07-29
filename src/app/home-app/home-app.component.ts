import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, FormControl, Validators, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {
  documentHtml: string;
  passwordHtml: string;

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  ngOnInit(): void {
  }


}
