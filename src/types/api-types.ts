import {
  Product,
  CheckboxOptions,
  Company,
  Pincode,
  OrderRequestBody,
  Order,
  Inventory,
  Products,
} from "./types";

export type AllProductsResponse = {
  result: Product[];
};

export type WishlistItem = {
  _id: string;
  productId: {
    name: string;
    discountPrice: number;
  };
};

export type WishListProductsResponse = {
  success: boolean;
  message: string;
  result: WishlistItem[];
};

export type CartItems = {
  [x: string]: any;
  _id: string;
  customerId: string;
  productId: {
    _id: string;
    name?: string;
  };
  quantity: number;
  price: number;
  updatedPrice: number;
  image: string;
  description: string;
  weight: number;
};

export type DeleteWishListResponse = {
  success: boolean;
  message: string;
};

export type DeleteWishListRequest = {
  _id: string;
};

export type AddToWishListResponse = {
  success: boolean;
  message: string;
};

export type AddToWishListRequest = {
  _id: string;
};

export type RatingReviewResponse = {
  success: boolean;
  message: string;
};

export type ReviewData = {
  rating: number;
  review: string;
};

export type ReviewResponse = {
  success: boolean;
  result: [
    {
      customerId: {
        _id: string;
        name: string;
      };
      rating: number;
      review: string;
    }
  ];
};

export type GetCatProductResponse = {
  category: [];
  item: [];
  product: {
    _id: string;
    name: string;
    itemCode: string;
    itemUnit: string;
    margin: number;
    description: string;
    difference: number;
    type: string;
    basicRate: number | null;
    gst: {
      value: number;
      type: string;
    };
    taxableValue: number;
    netRate: number;
    status: boolean;
  };
};

export interface CombinedState {
  search: string;
  rating: string | null;
  company: string[] | null;
  category: string[] | null;
  sort: string;
}

export interface UpdateCustomerProfile {
  success: string;
  message: string;
  customerData: CustomerData;
}

export interface UpdatedPasswordInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface FormData {
  email: string;
  password: string;
}

export type SearchWishListResponse = {
  success: boolean;
  message: string;
  result: WishlistItem[];
};

export type CartProduct = {
  _id: string;
  name: string;
  description: string;
  mrpPrice: number;
  discountPrice: number;
  status: string;
  image: string[];
  company: {
    name: string;
  };
  size: number;
  height: number;
  weight: number;
  thickness: number;
  material: string;
  category: {
    name: string;
  };
  productRating: number;
  __v: number;
};
export type CustomerCartResponse = {
  success: boolean;
  message: string;
  cartItems: CartProduct[];
};

// export type CategoryProductsResponse = {
//   success: boolean;
//   result: Product[];
// };
// export type CategoryProductsResponse2 = {
//   result: Product[];
// };

// export type SearchProductsResponse = {
//   success: boolean;
//   currentPage: number;
//   totalPages: number;
//   totalResult: number;
//   // message: string;
//   products: Product[];
// };

export enum UserRole {
  Customer = "customer",
  Admin = "admin",
}

export type CustomerData = {
  name: string;
  image: string;
  email: string;
  dob: string;
  gender: string;
  role: UserRole;
};

export type LoginResponse = {
  token: string;
  loginData: LoginData;
}  

interface LoginData {
  success: boolean;
  userId: string;
  createdAt: number;
  maxAge: number;
  role: string;
  name: string;
  email: string;
  phoneNumber: string;
  image: string;
  GodownName: string;
  GodownId: string;
}

export type CustomerLogoutResponse = {
  success: boolean;
  message: string;
};

export interface CombinedState {
  rating: string | null;
  company: string[] | null;
  category: string[] | null;
  page : number;
  limit : number;
}

export interface UpdateCustomerProfile {
  success: string;
  message: string;
  customerData: CustomerData;
}

export type UpdateData = {
  name?: string;
  image?: string;
  email?: string;
  dob?: string;
  gender?: string;
};
export interface UpdatedPasswordInput {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface FormData {
  email: string;
  password: string;
}

export type SearchProductsRequest = {
  // id : string;
  checkboxes: CheckboxOptions;
};

export type Rate = {
  rating: string;
};

export type AllCategoriesResponse = {
  id: string;
  name: string;
  itemCount: number;
  companyCount: string;
  image: string;
};

export type AdminResponse = {
  id: string;
  name: string;
  itemCount: number;
  companyCount: number;
  image: string;
  publish: boolean;
  publishItemCount:number;
};

export type CategoriesResponse = {
  id: string;
  name: string;
  itemCount: number;
  companyCount: number;
  image: string;
};

export type CompaniesResponse = Company[];

export type Address = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  pinCode: number;
  mobileNumber: string;
  state: string;
  city: string;
  alternateNumber?: string;
};

export type CustomerAddress = {
  success: boolean;
  message: string;
  addresses: Address[];
};
export type CustomerAddAddress = {
  success: boolean;
  message: string;
  addresses: Address;
};

export type AddPincode = {
  success: boolean;
  messsage: string;
  pincode: Pincode;
};

export type AdminPincode = {
  success: boolean;
  message: string;
};

export type updatePincode = {
  success: boolean;
  message: string;
  pincode: Pincode;
};

export type OrderResponse = {
  success: boolean;
  messsage: string;
  orderDetails: OrderRequestBody;
};

export type AllOrderResponse = {
  success: boolean;
  message: string;
  orders: Order[];
};

export type AdminOrderCountResponse = {
  success: boolean;
  message: string;
  orderCount: {
    allOrdersCount: number;
    pendingOrdersCount: number;
    cancelledOrdersCount: number;
  };
};

export type GetAllCustomersCountResponse = {
  success: boolean;
  message: string;
  allCustomerCount: number;
};

export type GetOrderDetailResponse = {
  success: boolean;
  message: string;
  result: [
    {
      customerName: string;
      orderDate: Date;
      orderTotal: number;
    }
  ];
};

export type InventoryResponse = {
  success: boolean;
  message: string;
  result: Inventory[];
};

export type changeStatusResponse = {
  
  message: string;
};

export type InventoryProduct = {
  success: boolean;
  message: string;
  result: Products[];
};

export type InventoryCategoryProduct = {
  totalpage: number;
  currentPage: number;
  totalResult: number;
  success: true;
  message: string;
  result: Products[];
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