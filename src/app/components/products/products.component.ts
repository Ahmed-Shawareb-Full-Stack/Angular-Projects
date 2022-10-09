import { ProductsService } from './../../services/products.service';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
// import { ICategory } from 'src/app/interfaces/icategory';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  totalPrice: number = 0;
  @Input() selectedCategoryId: number = 0;
  @Output() totalPriceEmitter: EventEmitter<number>;

  orderDate: Date;
  categoryFilter: IProduct[] = [];
  constructor(private ProductsService: ProductsService) {
    this.orderDate = new Date();
    this.totalPriceEmitter = new EventEmitter<number>();
  }

  ngOnInit(): void {
    this.categoryFilter = this.ProductsService.getAllProducts();

  }
  ngOnChanges(): void {
    this.categoryFilter = this.ProductsService.filterProductsByCategory(
      this.selectedCategoryId
    );
  }

  Buy(price: number, count: number): void {
    // console.log(typeof price, typeof count);
    this.totalPrice += price * count;
    this.totalPriceEmitter.emit(this.totalPrice);
    console.log("Hello")

    console.log(this.totalPrice);
  }
}
