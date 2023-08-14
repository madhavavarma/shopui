export interface IProduct {
  id: number;
  productName: string;
  weight: string;
  price: number;
  productDescription: string;
  images: string[];
  categories: number[];
  subCategories: number[];
  selectImage: number;
  isActive: boolean;
}
