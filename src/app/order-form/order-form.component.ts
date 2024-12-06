import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent implements OnInit {
  products : Product [] = [];

  productQuantities : { [productId:number] :number}  = {};


  constructor (private   productService : ProductService,private   commandeService : CommandeService
  ){}
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
