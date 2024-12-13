import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  username:string="";
  product : Product = {
    id:0,
    name:'',
    price:0,
    description:'',
  }

  // inject product service
  constructor (private productService:ProductService){}

  addProduct (){
    this.product.id = Date.now();
    // call  addProduct from productService
    this.productService.addProduct(this.product);
    // reset fields
    this.product={id:0,name:'',price:0,description:''}
  }

}
