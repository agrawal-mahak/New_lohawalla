
// // import {
// //     AdminResponse,
// //     AllCategoriesResponse,
// //     GetCatProductResponse,
    
// //   } from "../../types/api-types";
//   import { api } from "./rtkAPI";
//   import { lhwpath } from "../apiRoutes";
// import { AllCategoriesResponse } from "../../types.ts/api-types";
  
//   export const categoryQuery: any = api.injectEndpoints({
//     endpoints: (builder) => ({
//       allCategories: builder.query<AllCategoriesResponse, string>({
//         query: () => {
//           return {
//             url: `${lhwpath}getCategories/publish`,
//             method: "GET",
//           };
//         },
//       }),
  
//     //   adminCategories: builder.query<AdminResponse, {page: number , limit: string}>({
//     //     query: ({page,limit}) => {
//     //       const limitNumber = parseInt(limit);
//     //         console.log(page,limitNumber)
//     //       return {
//     //         url: `${lhwpath}customer/admin/getCategories/?page=${page}&limit=${limitNumber}`,
//     //         method: "GET",
//     //       };
//     //     },
//     //   }),
  
  
  
//     //   getCategoryProducts: builder.mutation<GetCatProductResponse,{ name: string }>({
//     //     query: ({ name }) => {
//     //       console.log("i m ", name);
//     //       return {
//     //         url: `${lhwpath}searchData/${name}`,
//     //         method: "GET",
//     //       };
//     //     },
  
//     //     // providesTags: ["category"] ,   // Specify cache tags to invalidate
//     //   }),
  
  
//     //   getAdminCategoryProducts: builder.query<GetCatProductResponse,{ name: string }>({
//     //     query: ({ name }) => {
//     //       console.log("i m ", name);
//     //       return {
//     //         url: `${lhwpath}customer/admin/searchData/${name}`,
//     //         method: "GET",
//     //       };
//     //     },
  
//     //      providesTags: ["category"] ,   // Specify cache tags to invalidate
//     //   }),
  
  
  
  
  
//     }),
//   });
  
//   export const { useAllCategoriesQuery, useGetCategoryProductsMutation, useGetAdminCategoryProductsQuery , useAdminCategoriesQuery } =
//     categoryQuery;
  


 
 
  import { CategoryProductsResponse } from "../../types.ts/api-types";
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
    }),
  });
  
  export const { useCategoryProductAPIQuery, useParticularCategoryQuery } = categoryProductAPI;