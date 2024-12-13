import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit  {

  products : Product [] = [];

  constructor(private  productService :ProductService){}

  // ngOnInit is a lifecycle hook in Angular that is called after the constructor is called and after the component's inputs have been initialized.
  ngOnInit(): void {
    // get all products
   this.products = this.productService.getProducts();
  }

  deleteProduct(id:number){
    // call delete product from product service
    this.productService.deleteProduct(id);

    // refresh
    this.products = this.productService.getProducts();
  }

}
