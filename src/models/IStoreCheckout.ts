import { ICart } from "./ICart";
import { IProduct } from "./IProduct";
import { IShipping } from "./IShipping";

export interface IStoreCheckout {
  activeStep: number;
  onMovingStep: boolean;
  cartList: ICart[];
  shipping: IShipping;
}
