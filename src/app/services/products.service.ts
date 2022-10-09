import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private productsList: IProduct[];
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
  }
  getAllProducts() {
    return this.productsList;
  }
  filterProductsByCategory(selectedCategoryId: number): IProduct[] {
    console.log(selectedCategoryId);
    if ((selectedCategoryId = 0)) {
      return this.productsList;
    } else {
      return this.productsList.filter(
        (product) => product.categoryId == selectedCategoryId
      );
    }
  }
  getProductById(productId: number): IProduct | null {
    let resultProduct = this.productsList.find(
      (product) => product.id == productId
    );
    return resultProduct ? resultProduct : null;
  }
}
