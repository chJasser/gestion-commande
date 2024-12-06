import { quartersInYear } from './../../../node_modules/date-fns/constants/index.d';
import { Product } from "./Product";

export class Commande {
  id:number;
  products: {product:Product , quantity:number} [];
  totalPrice:number ;
  date:Date;

  constructor (id:number, products : {product:Product,quantity:number} [] , date?:Date){
    this.id=id;
    this.products=products;
    this.totalPrice=this.calculateTotal();
    this.date=date || new Date();
  }

  calculateTotal () : number {
    return this.products.reduce((sum,item)=>sum+item.product.price*item.quantity,0)
  }
}


