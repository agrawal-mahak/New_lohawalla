import { CategoriesResponse, CategoryProductsResponse, CompaniesResponse } from  "../../types/api-types"
import { api } from "./rtkAPI";

export const categoryQuery: any = api.injectEndpoints({
    endpoints: (builder) => ({
       
      categoriesName: builder.query<CategoriesResponse, string>({
        query: () => {
          return {
            url: "https://www.lohawalla.com/global/getCategories/publish",
            method: "GET",
          };
        }   
      }),  

      // companiesName: builder.query<CompaniesResponse, string>({
      //   query: () => {
      //     return {
      //       url: "https://www.lohawalla.com/global/getCompanyList",
      //       method: "GET",
      //     };
      //   }   
      // }),  
      companiesName: builder.query<CompaniesResponse, string>({
        query: () => {
          return {
            url: "https://www.lohawalla.com/global/getCompanyList/publish",
            method: "GET",
          };
        }  
      }),  
      categoryProduct: builder.query<CategoryProductsResponse, string>({
        query: (categoryId) => ({
          url: `/category/${categoryId}/products`,
          method: "GET",
        }),
      }),

       
    }),
  });
  
  
  
  export const { 
    useCategoriesNameQuery,
     useCompaniesNameQuery,
  } = categoryQuery