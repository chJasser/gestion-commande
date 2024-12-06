import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products : Product []= [];

  addProduct (product:Product) : void{
    this.products.push(product);
  }

  getProducts (): Product []{
    return this.products;
  }

  deleteProduct (id:number): void {

  this.products=  this.products.filter((product)=>product.id!==id);

  }

  constructor() { }

}
