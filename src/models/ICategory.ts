import { ISubCatetory } from "./ISubCategory";

export interface ICategory {
  id: number;
  categoryName: string;
  displayOrder: number;
  subCategories?: ISubCatetory[];
}
