export interface IProduct {
  id: number;
  name: string;
  price: number;
  inStock: number;
  imageUrl?: string;
  categoryId?: number;
  productDescription?: string;
}
