import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

  @Input({ required: true}) products!: Product;
  
  @Output() addToCart = new EventEmitter();

  addCart() {
    console.log('Add to cart');
    this.addToCart.emit('From son');
  }

}
