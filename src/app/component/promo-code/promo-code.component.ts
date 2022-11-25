import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-promo-code',
  templateUrl: './promo-code.component.html',
})
export class PromoCodeComponent {
  promoCode: string | undefined;

  @Output() onApplyPromoCode = new EventEmitter();

  applyPromoCode() {
    const code = this.promoCode;

    if (code && code.trim() !== '') {
      this.onApplyPromoCode.emit(code);
    }
  }
}
