import { ProductsService } from './../../services/products.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
// import { ICategory } from 'src/app/interfaces/icategory';
import { IProduct } from '../../interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  totalPrice: number = 0;
  @Input() selectedCategoryId: number;
  @Output() totalPriceEmitter: EventEmitter<number>;

  orderDate: Date;
  categoryFilter: IProduct[] = [];
  constructor(
    private ProductsService: ProductsService,
    private activedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.orderDate = new Date();
    this.totalPriceEmitter = new EventEmitter<number>();
    this.selectedCategoryId = 0;
  }

  ngOnInit(): void {
    this.categoryFilter = this.ProductsService.getAllProducts();
    // console.log(this.categoryFilter);
  }

  ngOnChanges(): void {
    this.categoryFilter = this.ProductsService.filterProductsByCategory(
      this.selectedCategoryId
    );
    // console.log(this.categoryFilter);
  }

  Buy(price: number, count: number): void {
    // console.log(typeof price, typeof count);
    this.totalPrice += price * count;
    this.totalPriceEmitter.emit(this.totalPrice);

    // console.log(this.totalPrice);
  }
  productDetails(productId: any) {
    // console.log(productId);
    // this.router.navigate([`products/:${productId}`]);
  }
}
