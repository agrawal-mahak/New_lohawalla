import {AllProductsResponse,CombinedState,SearchProductsResponse} from "../../types/api-types";
import { lhwpath } from "../apiRoutes";
import { api } from "./rtkAPI";


export const productsQuery: any = api.injectEndpoints({
    endpoints: (builder) => ({
      searchAllProducts: builder.mutation<SearchProductsResponse, string>({
        query: (searchTerm) => {
          console.log( "searchh",searchTerm);
            
          return {
            url: `${lhwpath}/global/searchAssists/${searchTerm}`,
            method: "GET",
            
          };
        },
      }),

      // searchFilters: builder.mutation<SearchProductsResponse, {page:number,combinedState :CombinedState}>({
      //   query: ({page, combinedState}) => {
      //     console.log("hi i m filter api", combinedState, page);
      //     return {
      //       url: `product/search?page=${page}`,
      //       method: "POST",
      //       body: combinedState,
      //     };
      //   }, 
      // }),

      searchFilters: builder.mutation<SearchProductsResponse, {page:number,combinedState :CombinedState}>({
        query: ({page, combinedState}) => {
          console.log("hi i m filter api", combinedState);
          return {
            url: `https://www.lohawalla.com/global/getProductSearch`,
            method: "POST",
            body: combinedState
          };
        }, 
      }),

    
      allProducts: builder.query<AllProductsResponse, string>({
        query: () => {
          console.log("all product query")
          return {
            url: "https://www.lohawalla.com/global/searchData/ACCESSORIES roof",
            method: "GET",
          };
        }
   
      }),

      singleProduct: builder.query<AllProductsResponse, string>({
        query: (productId: string) => {
           console.log(productId,"HH")
          return {
            url: `product/${productId}`,
            method: "GET",
          };
        }
      }),
      
      
    }),
  });
  
  
  export const {useAllProductsQuery,
   useSearchAllProductsMutation,
   useSearchFiltersMutation,
   useSingleProductQuery 
     
  } = productsQuery


  