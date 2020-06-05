import { Component, OnInit } from '@angular/core';
import { faPlus, faUndo, faTimes, faBackward } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';

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

  
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  reset() {
    this.addForm.reset({});
    this.successMsg = null;
    this.errorMsg = null;
  }

  goBack() {
    this.router.navigate(['foreignCurrency'], {skipLocationChange: true}).catch();
  }



}
