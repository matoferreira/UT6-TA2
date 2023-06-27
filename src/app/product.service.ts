import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  products: Product[] = [
    {
      id: '1st',
      name: 'Macbook Pro M1',
      price: 1400,
      stock: 4,
      image: ['https://f.fcdn.app/imgs/147ba5/artcomputer.com.uy/artcuy/595e/original/catalogo/OUT39_OUT39_1/2000-2000/macbook-pro-13-inch-m1-2020-16gb-256gb-space-grey-us-macbook-pro-13-inch-m1-2020-16gb-256gb-space-grey-us.jpg']
    }
  ]
  constructor() { }

  getProducts() {
    console.log("pancho")
    return this.products;
  }
}
