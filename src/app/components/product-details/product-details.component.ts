import { IProduct } from './../../interfaces/iproduct';
import { ProductsService } from './../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  productId: number = 0;
  product: IProduct | null = null;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private ProductsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.productId = Number(
      this.activatedRoute.snapshot.paramMap.get('productId')
    );
    this.product = this.ProductsService.getProductById(this.productId);
    console.log(this.product);
  }
}
