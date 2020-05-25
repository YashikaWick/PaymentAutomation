import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faBackward, faPlus, faTimes, faUndo} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';




@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  faAdd = faPlus;
  faReset = faUndo;
  faClose = faTimes;
  faBack = faBackward;

  addForm: FormGroup;
  isSubmitted: boolean = false;

  successMsg: string;
  errorMsg: string;

  isLoading: boolean = true;
  color: ThemePalette = 'accent';

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.successMsg = null;
    this.errorMsg = null;

   /*  this.getUserRoles();

    this.getStatuses();

    this.getManagers();

    this.addForm = this.formBuilder.group({
      empNo: [''],
      username: [''],
      userRole: ['', Validators.required],
      status: ['', Validators.required],
      managerId: ['']
    });

    this.setValidators(); */
  }



  reset() {
    this.addForm.reset({});
    this.successMsg = null;
    this.errorMsg = null;
  }

  goBack() {
    this.router.navigate(['product'], {skipLocationChange: true}).catch();
  }

}
