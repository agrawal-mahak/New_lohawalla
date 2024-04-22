import { configureStore } from "@reduxjs/toolkit";
import { api } from "./Api/rtkAPI";
// import { customerReducer } from "./reducer/customerReducer";
// import componentReducer, { ComponentState } from "./Slice/componentSlice";
// import { CustomerReducerInitialState } from "../types/reducer-types";

export const server = process.env.VITE_SERVER;

export interface RootState {
  // component: ComponentState;
//   customerReducer: CustomerReducerInitialState;

  // Add other state types here
}

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    // [customerReducer.name]: customerReducer.reducer,
    // component: componentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
