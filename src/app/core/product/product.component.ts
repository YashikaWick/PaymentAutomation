import { Component, OnInit } from '@angular/core';
import {faAngleDoubleRight, faList, faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  faAdd = faPlusCircle;
  faRight = faAngleDoubleRight;
  faView = faList;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoLink(link: string){
    console.log("Direct to product add");
    this.router.navigate(['product', link], {skipLocationChange: true}).catch();
  }

}
