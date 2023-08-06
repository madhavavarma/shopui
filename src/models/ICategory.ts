export interface Category {
  id: number;
  categoryName: string;
  subCategories?: Category[];
}
