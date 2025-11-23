import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, switchMap, tap } from 'rxjs';

export interface Products {
  products: Product[];
  total: number;
  skip: 0;
  limit: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly _httpClient = inject(HttpClient);

  constructor() {}

  getProducts() {
    const products = this._httpClient
      .get('https://dummyjson.com/products')
      .pipe(
        tap((data) => {
          return data;
        }),
      );
    return products;
  }

  getProduct(id: number) {
    const products = this._httpClient
      .get(`https://dummyjson.com/products/${id}`)
      .pipe(
        tap((data) => {
          return data;
        }),
      );
    return products;
  }
}
