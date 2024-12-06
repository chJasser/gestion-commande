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

  ngOnInit(): void {
   this.products = this.productService.getProducts();
  }

  deleteProduct(id:number){
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

}
