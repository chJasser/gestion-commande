import { Component, OnInit } from '@angular/core';
import { Commande } from '../models/Commande';
import { CommandeService } from '../services/commande.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit{
  orders: Commande[] = [];
  totalSum: number = 0
  constructor(private commandeService: CommandeService) {}

  ngOnInit(): void {
    this.orders = this.commandeService.getCommandes();
    this.totalSum = this.commandeService.calculateTotal();
  }
  deleteOrder(id: number): void {
    this.commandeService.deleteCommande(id);
    this.orders = this.commandeService.getCommandes();
    this.totalSum = this.commandeService.calculateTotal();
  }

}
