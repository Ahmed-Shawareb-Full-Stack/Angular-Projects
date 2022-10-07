import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interfaces/icategory';
import { IProduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  productsList: IProduct[] = [];
  categories: ICategory[];
  totalPrice: number = 0;
  selectedCategoryId: number = 0;

  constructor() {
    this.productsList = [
      {
        id: 1,
        name: 'Laptop',
        price: 10000,
        inStock: 0,
        imageUrl: 'https://placekitten.com/100/100',
        categoryId: 1,
        productDescription: `loremsdafmkodmpokdmsvpo[madpo[vmp[osdmvp[odmopi[msd[pvmad[mp[sdmvklomxcvkmxcklmkolvbdfnbnioidfnmbkmcxkbinoiafnvbi[nmafp[vnm[onamdvponfodvndvk]]]]]]]]]]]`,
      },
      {
        id: 2,
        name: 'Laptop 2 ',
        price: 10000,
        inStock: 1,
        imageUrl: 'https://placekitten.com/100/100',
        categoryId: 2,
        productDescription: `loremsdafmkodmpokdmsvpo[madpo[vmp[osdmvp[odmopi[msd[pvmad[mp[sdmvklomxcvkmxcklmkolvbdfnbnioidfnmbkmcxkbinoiafnvbi[nmafp[vnm[onamdvponfodvndvk]]]]]]]]]]]`,
      },
      {
        id: 3,
        name: 'Laptop 3 ',
        price: 10000,
        inStock: 0,
        imageUrl: 'https://placekitten.com/100/100',
        categoryId: 3,
        productDescription: `loremsdafmkodmpokdmsvpo[madpo[vmp[osdmvp[odmopi[msd[pvmad[mp[sdmvklomxcvkmxcklmkolvbdfnbnioidfnmbkmcxkbinoiafnvbi[nmafp[vnm[onamdvponfodvndvk]]]]]]]]]]]`,
      },
      {
        id: 4,
        name: 'Laptop 4 ',
        price: 10000,
        inStock: 50,
        imageUrl: 'https://placekitten.com/100/100',
        categoryId: 3,
        productDescription: `loremsdafmkodmpokdmsvpo[madpo[vmp[osdmvp[odmopi[msd[pvmad[mp[sdmvklomxcvkmxcklmkolvbdfnbnioidfnmbkmcxkbinoiafnvbi[nmafp[vnm[onamdvponfodvndvk]]]]]]]]]]]`,
      },
      {
        id: 5,
        name: 'Laptop 5 ',
        price: 10000,
        inStock: 2,
        imageUrl: 'https://placekitten.com/100/100',
        categoryId: 1,
        productDescription: `loremsdafmkodmpokdmsvpo[madpo[vmp[osdmvp[odmopi[msd[pvmad[mp[sdmvklomxcvkmxcklmkolvbdfnbnioidfnmbkmcxkbinoiafnvbi[nmafp[vnm[onamdvponfodvndvk]]]]]]]]]]]`,
      },
      {
        id: 6,
        name: 'Laptop 6 ',
        price: 10000,
        inStock: 70,
        imageUrl: 'https://placekitten.com/100/100',
        categoryId: 2,
        productDescription: `loremsdafmkodmpokdmsvpo[madpo[vmp[osdmvp[odmopi[msd[pvmad[mp[sdmvklomxcvkmxcklmkolvbdfnbnioidfnmbkmcxkbinoiafnvbi[nmafp[vnm[onamdvponfodvndvk]]]]]]]]]]]`,
      },
    ];
    this.categories = [
      { id: 1, name: 'laptop' },
      { id: 2, name: 'mobile' },
      { id: 3, name: 'PC' },
    ];
  }

  ngOnInit(): void {}

  Buy(price: number, count: number): void {
    // console.log(typeof price, typeof count);
    this.totalPrice += price * count;
    console.log(this.totalPrice);
  }
}
