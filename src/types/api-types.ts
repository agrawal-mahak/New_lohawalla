import { Product, Products } from "./types";

export type AllCategoriesResponse = {
    id: string;
    name: string;
    itemCount: number;
    companyCount: string;
    image: string;
  };

  export type CategoryProductsResponse = {
    result: Product[];
  };

  export type CategoryProductsResponse2 = {
    result: Product[];
  };

  export type SearchProductsResponse = {
    message: string;
    total: number; 
    products: Product[];
  };
 