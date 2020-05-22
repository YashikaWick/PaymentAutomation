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

  isAudit: boolean = false;
  isGm: boolean = false;

  successMsg: string;
  errorMsg: string;

  isLoading: boolean = true;
  color: ThemePalette = 'accent';

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.successMsg = null;
    this.errorMsg = null;

    this.getUserRoles();

    this.getStatuses();

    this.getManagers();

    /* this.addForm = this.formBuilder.group({
      empNo: [''],
      username: [''],
      userRole: ['', Validators.required],
      status: ['', Validators.required],
      managerId: ['']
    });

    this.setValidators(); */
  }

  setValidators() {
    const empNo = this.f.empNo;
    const description = this.f.username;
    const manager = this.f.managerId;

    this.f.userRole.valueChanges.subscribe(
      role => {
        if (role === 'AUDIT') {

          description.setValidators(Validators.required);
          empNo.setValidators(null);
          manager.setValidators(null);

        } else if (role === 'GM') {
          this.isGm = true;

          description.setValidators(null);
          empNo.setValidators(Validators.required);
          manager.setValidators(null);

        } else {
          description.setValidators(null);
          empNo.setValidators(Validators.required);
          manager.setValidators(Validators.required);
        }

        empNo.updateValueAndValidity();
        description.updateValueAndValidity();
        manager.updateValueAndValidity();
      }
    )

  }

  get f() {
    return this.addForm.controls;
  }

  getUserRoles() {
   /*  this.userService.getUserRoles().subscribe(
      res => {
        if (res.responseCode === 1000) {
          this.userRoles = res.responseObj;

          this.isLoading = false;

        } else {
          this.errorMsg = res.responseMsg;
        }
      }, error => {
        this.errorMsg = "Error occurred";
        console.log(error);
      }
    ) */
  }

  getStatuses() {
    /* this.userService.getUserStatuses().subscribe(
      res => {
        if (res.responseCode === 1000) {
          this.statuses = res.responseObj;

        } else {
          this.errorMsg = res.responseMsg;
        }
      }, error => {
        this.errorMsg = "Error occurred";
        console.log(error);
      }
    ) */
  }

  getManagers() {
    /* this.userService.getUserList(0, 'manager', 0).subscribe(
      res => {
        if(res.responseCode === 1000) {
          this.managers = res.responseObj;

        } else {
          this.errorMsg = res.responseMsg;
        }
      }, error => {
        this.errorMsg = "Error occurred";
        console.log(error);
      }
    ) */
  }

  addUser() {
    /* this.successMsg = null;
    this.errorMsg = null;

    this.isSubmitted = true;

    if (this.addForm.valid) {
      //console.log(this.addForm);

      this.user = this.addForm.value;
      this.user.curUser = this.curUser.userId;

      console.log(this.user);
      //console.log(this.curUser);

      this.userService.addUser(this.user).subscribe(
        res => {
          if (res.responseCode===1000) {
            this.addForm.reset({userRole: '', status: '', managerId: ''});
            this.isSubmitted = false;

            this.successMsg = res.responseObj;

          } else {
            this.errorMsg = res.responseMsg;
          }
        }, error => {
          this.errorMsg = "Error occurred";
          console.log(error);
        }
      );
    } */
  }

  onRoleSelect() {
    let role = this.f.userRole.value;

    this.isAudit = role === 'AUDIT';
    this.isGm = role === 'GM';
  }

  reset() {
    this.addForm.reset({userRole: '', status: '', managerId: ''});
    this.successMsg = null;
    this.errorMsg = null;
  }

  goBack() {
    this.router.navigate(['product'], {skipLocationChange: true}).catch();
  }

}
