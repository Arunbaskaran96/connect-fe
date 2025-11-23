import { Component, inject, input, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent implements OnInit {
  public id = input.required<string>();

  public product: any = null;

  private readonly _productService = inject(ProductService);

  constructor() {}

  public ngOnInit(): void {
    this._productService
      .getProduct(+this.id())
      .subscribe((data) => (this.product = data));
  }
}
