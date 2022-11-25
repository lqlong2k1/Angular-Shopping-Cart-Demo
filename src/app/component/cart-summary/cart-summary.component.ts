import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
})
export class CartSummaryComponent {
  @Input() subTotal: any;
  @Input() tax: any;
  @Input() discount: any;
}
