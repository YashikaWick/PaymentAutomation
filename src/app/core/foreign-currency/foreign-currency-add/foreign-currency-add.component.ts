import { Component, OnInit } from '@angular/core';
import { faPlus, faUndo, faTimes, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { CoreService } from '../../core.service';

@Component({
  selector: 'app-foreign-currency-add',
  templateUrl: './foreign-currency-add.component.html',
  styleUrls: ['./foreign-currency-add.component.css']
})
export class ForeignCurrencyAddComponent implements OnInit {

  faAdd = faPlus;
  faReset = faUndo;
  faClose = faTimes;
  faBack = faBackward;

  addForm:FormGroup;

  successMsg: string;
  errorMsg: string;

  color: ThemePalette = 'accent';

  isSubmitted: boolean = false;

  isLoading:boolean = true;
  
  constructor(private router:Router, private formBuilder:FormBuilder, private coreService:CoreService) { }

  ngOnInit(): void {

    this.successMsg = null;
    this.errorMsg = null;

    this.addForm = this.formBuilder.group({
      currency:[''],
      lkrAmount:[''],
      date:['']
    })

  }

  get f() {
    return this.addForm.controls;
  }


  addCurrency(){
    this.successMsg = null;
    this.errorMsg = null;

    this.isSubmitted = true;

    if(this.addForm.valid){

    }
  }

  reset() {
    this.addForm.reset({currency:'', lkrAmount:'', date:''});
    this.successMsg = null;
    this.errorMsg = null;
  }

  goBack() {
    this.router.navigate(['foreignCurrency'], {skipLocationChange: true}).catch();
  }

}
