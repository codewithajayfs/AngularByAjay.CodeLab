import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Profile]
})
export class App {
  
  // ✅ Property
  productName = 'Apple iPhone 16';

  // ✅ Property
  price = 80000;

  // ✅ Property
  quantity = 2;

  // ✅ Property
  inStock = true;

  // ✅ Signal
  customerName = signal('Ajay Gangwar');

  // ✅ Method
  getDiscountPercentage(): number {

    // ✅ Variable (local variable)
    let discount = 10;

    return discount;
  }

  // ✅ Method
  getFinalPrice(): number {

    // Local variables
    let discount = this.getDiscountPercentage();
    let finalPrice = this.price - (this.price * discount / 100);

    return finalPrice;
  }
}
