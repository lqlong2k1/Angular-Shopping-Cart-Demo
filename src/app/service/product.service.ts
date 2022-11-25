import { Injectable } from '@angular/core';
import { IProduct } from '../interface/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: IProduct[] = [
    {
      id: 1,
      name: 'Apple iPhone 14 Pro Max - Chính hãng VN/A',
      description:
        'iPhone 14 Pro Max VN/A là dòng sản phẩm cao cấp nhất nằm trong thế hệ iPhone 14 Series mới vừa được ra mắt cùng với nhiều nâng cấp về ngoại hình và tính năng, hứa hẹn sẽ là dòng sản phẩm đột phá trong vài năm trở lại đây của Apple.',
      image:
        'https://cdn.hoanghamobile.com/i/preview/Uploads/2022/09/08/1111.png',
      price: 31990000,
      quantity: 2,
    },
    {
      id: 2,
      name: 'Apple iPhone 13 Pro - 256GB - Chính hãng VN/A',
      description:
        'Phone 13 Pro được hãng áp dụng công nghệ pin mới "soft board battery technology" mang đến khả năng tiết kiệm tối đa diện tích cũng như giá thành sản xuất. Đặc biệt, dung lượng pin cho phép thời gian onscreen khá lâu, vượt xa thế hệ tiền nhiệm iPhone 12 Pro khoảng 1,5 tiếng.',
      image:
        'https://cdn.hoanghamobile.com/i/preview/Uploads/2022/03/09/image-removebg-preview-3.png',
      price: 26990000,
      quantity: 1,
    },
  ];

  getProducts(): IProduct[] {
    return this.products;
  }

  findById(id: number): any {
    return this.products.find((product: IProduct) => product.id === id);
  }

  findIndexById(id: number): number {
    return this.products.findIndex((product) => product.id === id);
  }

  updateQuantity(id: number, quantity: number) {
    const product = this.findById(id);
    if (product) {
      product.quantity = quantity || 0;
    }
  }

  removeProduct(id: number): boolean {
    const index = this.findIndexById(id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return true;
    }

    return false;
  }
}
