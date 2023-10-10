import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title = 'Products';
  products: Product[];
  products$: Observable<Product[]>;
  selectedProduct: Product;

  onSelect(product: Product) {
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {
    this.products$ = this.productService.products$;

    // this
    //   .productService
    //   .products$
    //   .subscribe(
    //     results => this.products = results
    //   );
  }
}
