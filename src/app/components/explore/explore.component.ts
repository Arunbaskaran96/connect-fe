import { Component, inject } from '@angular/core';
import { Products, ProductService } from '../../services/product.service';
import { MatCalendarHeader } from '@angular/material/datepicker';
import { MatCard, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [MatCard, MatCardModule, CommonModule, RouterLink],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss',
})
export class ExploreComponent {
  private readonly _productService = inject(ProductService);

  public products: any = null;

  constructor() {
    this._productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }
}
