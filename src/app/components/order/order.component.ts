import { ProductsComponent } from './../products/products.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  categories: ICategory[];
  RecivedTotalPrice: number = 0;
  ParenteslectedCatID: number = 0;
  @ViewChild(ProductsComponent) productListComponent!: ProductsComponent;
  constructor() {
    this.categories = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'PC' },
    ];
  }

  ngOnInit(): void {}
  onTotalPriceChanged(total: number): void {
    this.RecivedTotalPrice = total;
  }

  
}
