import { Component, Input, SimpleChanges, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input({ required: true }) cart: Product[] = [];
  total = signal(0);
  
  hideSideMenu = signal(true);

  toggleSideMenu() {
    this.hideSideMenu.update(prevState => !prevState);
  }

  ngOnChanges( changes: SimpleChanges ) {
    const cart = changes['cart'];
    if (cart) {
      this.total.set( this.calculateTotal() );
    }
  }

  calculateTotal() {
    return this.cart.reduce( (total, product) => total + product.price, 0 );
  }
}
