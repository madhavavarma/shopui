import { Category } from "./ICategory";

export interface IStoreCategory {
  list: Category[];
  active: number;
  subActive: number;
}
