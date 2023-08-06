import { ICategory } from "./ICategory";

export interface IStoreCategory {
  list: ICategory[];
  active: number;
  subActive: number;
}
