import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(){
    return[
      {"productCode": 1, "name": "testProduct1"},
      {"productCode": 2, "name": "testProduct2"}
    ]
  }
}
