import { Component, OnInit } from '@angular/core';
import {faBackward, faPlus, faTimes, faUndo,faSearch} from '@fortawesome/free-solid-svg-icons';
import { FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  faAdd = faPlus;
  faReset = faUndo;
  faClose = faTimes;
  faBack = faBackward;
  faSearch = faSearch;

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

  }

  search() {
    this.successMsg = null;
    this.errorMsg = null;

    /* this.user = this.searchForm.value;
    this.user.statuses = this.statuses;
    this.user.rolesList = this.userRoles;

    this.userService.getAllUsers(this.user).subscribe(
      res => {
        if (res.responseCode === 1000) {
          this.users = res.responseObj;

          this.coreService.changeUsersList(this.users);

          this.isSearched = true;
          this.emitter.emit(this.isSearched);
        } else {
          this.errorMsg = res.responseMsg;
        }
      }, error => {
        this.errorMsg = "Error occurred";
        console.log(error);
      }
    ); */
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
