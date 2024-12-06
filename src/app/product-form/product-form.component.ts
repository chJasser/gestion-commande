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

  // onClick html

  addProduct (){
    this.product.id = Date.now();
    this.productService.addProduct(this.product);
    this.product={id:0,name:'',price:0,description:''}
  }

}
