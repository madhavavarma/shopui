import { ISubCatetory } from "./ISubCategory";

export interface ICategory {
  id: number;
  categoryName: string;
  subCategories?: ISubCatetory[];
}
