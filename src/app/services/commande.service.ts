import { Injectable } from '@angular/core';
import { Commande } from '../models/Commande';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private commandes: Commande []= [];
  private selectedProducts :{ product:Product,quantity:number } []=[];
  getCommandes (): Commande []{
   return this.commandes;
  }

  addProductToCommande (product:Product,quantity:number) : void{
    const existingProduct = this.selectedProducts.find( (item)=>item.product.id === product.id);
    if(existingProduct){
      existingProduct.quantity += quantity;
    }else {
      this.selectedProducts.push({product,quantity});
    }
  }
  getTotalPrice (): number {
    return this.selectedProducts.reduce((sum,item)=>sum+ item.product.price * item.quantity,0);
  }

  submitCommande () : Commande {

    const commande : Commande = new Commande (
      Date.now(),
      this.selectedProducts,
      new Date(),
    );

    this.commandes.push(commande);
    this.selectedProducts=[];
    return commande;
  }


  constructor() { }
}
