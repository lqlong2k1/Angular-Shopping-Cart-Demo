import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-header',
  templateUrl: './cart-header.component.html',
})
export class CartHeaderComponent implements OnInit {
  @Input() numberItems: number | undefined;

  title = 'Shopping Cart';
  constructor() {}
  ngOnInit(): void {}
}
