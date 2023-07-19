import { IStoreCheckout } from "./IStoreCheckout";
import { IStoreCategory } from "./IStoreCategory";
import { IStoreProduct } from "./IStoreProduct";

export interface IStoreReducer {
  category: IStoreCategory;
  product: IStoreProduct;
  checkout: IStoreCheckout;
}
