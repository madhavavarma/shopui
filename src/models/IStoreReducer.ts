import { IStoreCheckout } from "./IStoreCheckout";
import { IStoreCategory } from "./IStoreCategory";
import { IStoreProduct } from "./IStoreProduct";
import { IStoreLayout } from "./IStoreLayout";

export interface IStoreReducer {
  layout: IStoreLayout;
  category: IStoreCategory;
  product: IStoreProduct;
  checkout: IStoreCheckout;
}
