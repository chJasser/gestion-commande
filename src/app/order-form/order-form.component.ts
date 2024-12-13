import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css'],
})
export class OrderFormComponent implements OnInit {
  products: Product[] = [];
  productQuantities: { [productId: number]: number } = {};

  constructor(
    private productService: ProductService,
    private commandeService: CommandeService
  ) {}

  ngOnInit(): void {
    // productService
    this.products = this.productService.getProducts();

    // initialize productQuantities to 1
    this.products.forEach((product) => {
      this.productQuantities[product.id] = 1;
    });
      //     productQuantities = {
      // 1:1,
      // 2:1,
      // 3:1,
      //     }
  }

  onProductAdded(product: Product): void {
    const quantity = this.productQuantities[product.id] || 0;
    if (quantity <= 0) {
      alert('Please enter a valid quantity!');
      return;
    }
//  call addProductToCommande from  commandeService
    this.commandeService.addProductToCommande(product, quantity);
    this.productQuantities[product.id] = 1;  // Reset quantity to 1 after adding
  }

  removeProductFromOrder(productId: number): void {
    this.commandeService.removeProductFromOrder(productId);
  }

  get totalPrice(): number {
    return this.commandeService.getTotalPrice();
  }

  get selectedProducts(): { product: Product; quantity: number }[] {
    return this.commandeService.getSelectedProducts();
  }

  submitOrder(): void {
    this.commandeService.submitCommande();
    alert('Order submitted successfully!');
  }
}
