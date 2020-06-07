import { Component, OnInit } from '@angular/core';
import { faPlus, faUndo, faTimes, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { CoreService } from '../../core.service';
import { ForeignCurrency } from '../../foreign-currency';

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
  isSubmitted: boolean = false;

  foreignCurrency:ForeignCurrency

  successMsg: string;
  errorMsg: string;

  color: ThemePalette = 'accent';

  

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
      this.foreignCurrency = this.addForm.value;
      //console.log(this.foreignCurrency);
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
