import { AllCategoriesResponse, CategoryProductsResponse, CategoryProductsResponse2 } from "../../types/api-types";
import { lhwpath } from "../apiRoutes";
import { api } from "./rtkAPI";
 
  export const categoryProductAPI: any = api.injectEndpoints({
    endpoints: (builder) => ({
      categoryProductAPI: builder.query<CategoryProductsResponse, string>({
        query: () => {
          return {
            url: " https://www.lohawalla.com/global/getCategories/publish ",
            method: "GET",
          };
        },
      }),
 
      particularCategory: builder.query<CategoryProductsResponse, string>({
        query: (name) => {
          console.log(name)
          return {
            url: `${lhwpath}searchData/${name}`,
            method: "GET",
          };
        }  
      }),

      categoryProductAPI2: builder.query<CategoryProductsResponse2, string>({
        query: () => {
          console.log("I m cat2");
          return {
            url: "https://www.lohawalla.com/global/getCategories/publish",
            method: "GET",
          };
        },
      }),

      particularCategory2: builder.query<CategoryProductsResponse, string>({
        query: (name2) => {
          console.log(name2, 'vgvtg');
          return {
            url: `${lhwpath}searchData/${name2}`,
            method: "GET",
          };
        }  
      }),

      allCategories: builder.query<AllCategoriesResponse, string>({
        query: () => {
          return {
            url: `${lhwpath}getCategories/publish`,
            method: "GET",
          };
        },
      }),
    }),
  });
  
  export const { useCategoryProductAPIQuery, useParticularCategoryQuery , useCategoryProductAPI2Query, useParticularCategory2Query,useAllCategoriesQuery } = categoryProductAPI;