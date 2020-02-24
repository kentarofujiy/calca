import { Component } from '@angular/core';
// models
import { Product } from './product';
import { Tarifa } from './tarifa';
import { Cliente } from './cliente';
// services
import { ProductDataService} from './product-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Energy Cálculo A';
  products: Product[] = [];


    constructor(private productDataService: ProductDataService) {
    }

    public OnInit() {
      this.productDataService
        .getAllProducts()
        .subscribe(
          (products) => {
            console.log(products);
            this.products = products;
          }
        );
    }
    /**
    onAddProduct(product: Product) {
      this.productDataService.addProduct(product);
    }

    onToggleProductStatus(product: Product) {
      this.productDataService.toggleProductStatus(product);
    }

    onRemoveProduct(product) {
      this.productDataService.deleteProductById(product.id);
    }
    */
}
