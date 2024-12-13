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

  getCommandes(): Commande[] {
    return this.Commandes;
  }

  getSelectedProducts(): { product: Product; quantity: number }[] {
    return this.selectedProducts;
  }
  addProductToCommande(product: Product, quantity: number): void {
    const existingProduct = this.selectedProducts.find(
      (item) => item.product.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      this.selectedProducts.push({ product, quantity });
    }
  }
  getTotalPrice(): number {
    return this.selectedProducts.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
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

  calculateTotal(): number {
    return this.Commandes.reduce((sum, Commande) => sum + Commande.totalPrice, 0);
  }
  // Method to remove a product from the selected products
  removeProductFromOrder(productId: number): void {
    const productIndex = this.selectedProducts.findIndex(
      (item) => item.product.id === productId
    );

    if (productIndex !== -1) {
      // Remove the product from the array
      this.selectedProducts.splice(productIndex, 1);
    } else {
      console.log('Product not found in the order');
    }

    // Recalculate total price after removal
    this.getTotalPrice();
  }

}
