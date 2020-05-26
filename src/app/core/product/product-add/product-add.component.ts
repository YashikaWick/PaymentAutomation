import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faBackward, faPlus, faTimes, faUndo} from '@fortawesome/free-solid-svg-icons';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import { User } from '../../user';
import { CoreService } from '../../core.service';
import { ProductService } from '../../product.service';




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

  managers: User[];

  successMsg: string;
  errorMsg: string;

  isLoading: boolean = true;
  color: ThemePalette = 'accent';

  constructor(private router:Router, 
    private coreService: CoreService, private productService: ProductService) { }

  ngOnInit(): void {

    this.successMsg = null;
    this.errorMsg = null;

   /*  
    this.getManagers();

   */

  // this.addForm = this.formBuilder.group({})
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
