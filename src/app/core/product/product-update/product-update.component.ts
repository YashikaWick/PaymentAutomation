import { Component, OnInit } from '@angular/core';
import { faPlus, faUndo, faTimes, faBackward, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  faAdd = faPlus;
  faReset = faUndo;
  faClose = faTimes;
  faBack = faBackward;
  faUpdate = faEdit;

  editForm: FormGroup;
  isSubmitted: boolean = false;

  successMsg: string;
  errorMsg: string;

  isLoading: boolean = true;
  color: ThemePalette = 'accent';
  
  //productModel = new Product();

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.successMsg = null;
    this.errorMsg = null;
  }

  updateProduct(){
    
  }

  reset() {
    this.editForm.reset({});
    this.successMsg = null;
    this.errorMsg = null;
  }

  goBack() {
    this.router.navigate(['product'], {skipLocationChange: true}).catch();
  }



}
