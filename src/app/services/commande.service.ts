import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Commande } from '../models/Commande';

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  private Commandes: Commande[] = [];
  private selectedProducts: { product: Product; quantity: number }[] = [];

  constructor() {}

  // get orders list
  getCommandes(): Commande[] {
    return this.Commandes;
  }
  // products panier to be added to order
  getSelectedProducts(): { product: Product; quantity: number }[] {
    return this.selectedProducts;
  }

  // add product to order
  addProductToCommande(product: Product, quantity: number): void {

    // check if product exists
    const existingProduct = this.selectedProducts.find(
      (item) => item.product.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.selectedProducts.push({ product, quantity });
    }
  }
// calculate total price

  getTotalPrice(): number {
    // The reduce() method of Array instances executes a callback function on each element of the array,
    return this.selectedProducts.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
  // create new commande with products
  submitCommande(): Commande {
    const newCommande: Commande = new Commande(
      Date.now(),
      this.selectedProducts,
      new Date(),
    );
    this.Commandes.push(newCommande);
    this.selectedProducts = [];
    return newCommande;
  }

  addCommande(Commande: Commande): void {
    this.Commandes.push(Commande);
  }

  deleteCommande(id: number): void {
    this.Commandes = this.Commandes.filter((c) => c.id !== id);
  }

  // calculate total of all commandes
  calculateTotal(): number {
    return this.Commandes.reduce((sum, Commande) => sum + Commande.totalPrice, 0);
  }

  // delete added product from list
  removeProductFromOrder(productId: number): void {
    const productIndex = this.selectedProducts.findIndex(
      (item) => item.product.id === productId
    );
    if (productIndex !== -1) {
      // form productIndex  item
      this.selectedProducts.splice(productIndex, 1);
    } else {
      console.log('Product not found in the order');
    }
    this.getTotalPrice();
  }

}
