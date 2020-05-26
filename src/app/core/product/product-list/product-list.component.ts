import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ProductService } from '../../product.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {faList} from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input('isLoading') isLoading: boolean = true;
  @ViewChild(MatPaginator, {static:true}) paginator:MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource = new MatTableDataSource<Product>();

  displayedColumnNames: String[] = [];

 // public products = [];

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    //this.products = this.productService.getProducts();
  }

}
