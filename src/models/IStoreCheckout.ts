import { ICart } from "./ICart";
import { IProduct } from "./IProduct";
import { IShipping } from "./IShipping";

export interface IStoreCheckout {
  cartList: ICart[];
  shipping: IShipping;
}
