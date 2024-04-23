import { SearchProductsResponse } from "../../types/api-types";
import { lhwpath } from "../apiRoutes";
import { api } from "./rtkAPI";


export const PriceQuery: any = api.injectEndpoints({
    endpoints: (builder) => ({
        Price: builder.mutation<any, string>({
            query: (bodyData) => {
            //  console.log("items added",bodyData)
              return {
                url: `https://www.lohawalla.com/inventoryRouter/All/item/Price/v2`,
                method: "POST",
                body: bodyData,
              };
            },
          }),
        
        searchAllProducts: builder.mutation<SearchProductsResponse, string>({
            query: (searchTerm) => {
              console.log( "searchh",searchTerm);
                
              return {
                url: `${lhwpath}searchAssists/${searchTerm}`,
                method: "GET",
                
              };
            },
          }),

        }),
    });
    
export const {usePriceMutation, useSearchAllProductsMutation } = PriceQuery;