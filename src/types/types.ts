// export interface Product {
//   status : string;
//   _id: string;
//    name: string;
//    description: string;
//    image: string[];
//    productRating: number;
//    manufacturer: string;
//    size: number;
//   height: number;
//   weight: number;
//   thickness: number ;
//   material:string;
//   category: Categories;
//   review: string;
//   mrpPrice:number;
//   company: Company;
//   discountPrice: number;
// }
 
export interface FilterProps {
  onClick: () => void;
}
 
export interface CheckboxOptions {
  MSPlate: boolean;
  MSTMTBar: boolean;
  MSRoundBar: boolean;
  MSSquareBar: boolean;
  Cement: boolean;
  search: string;
}
 
export interface Checkboxes {
  Indostar: boolean;
  TATA: boolean;
  Zindal: boolean;
  JSW: boolean;
  Mittal: boolean;
  Ambuja: boolean;
  search: string;
}
 
export interface Categories {
  id: string ,
  name: string,
  itemCount?: number,
  companyCount?: string,
  image?: string,
}
 
// export interface Companies {
//   _id: string ,
//   name: string,
//   description?: string
// }
 
//category
export interface FormData {
  search: string;
  checkboxes: { [key: string]: boolean };
}
 
export interface Form {
  search: string;
  checkboxes: { [key: string]: boolean };
}
 
export type SearchResult = {
  category: [];
  company?: [];
  item?: [];
  product: [];
};
 
export type Pincode = {
  _id: string;
  pincode: string;
  place: string;
  actionType: string;
  statusType: string;
};
 
export type Address = {
  _id: string;
  address: string;
  city: string;
  customerId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  pinCode: number;
  state: string;
};
 
export interface ReviewData {
  rating: number;
  review: string;
}
 
export interface OrderRequestBody {
  modeOfShipment: string;
  paymentMethod: string;
  selectedAddressId: string;
  shippingMethod: string;
}
 
export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
  updatedPrice: number;
  image: string;
  description: string;
  _id: string;
}
 
export interface Order {
  _id: string;
  orderItems: OrderItem[];
  totalQuantity: number;
  orderPrice: number;
  tax: number;
  totalPrice: number;
  shippingEstimate: number;
  selectedAddress: string;
  modeOfShipment: string;
  paymentMethod: string;
  shippingMethod: string;
  customerId: string;
  status: string;
  __v: number;
}
 
export interface RequestBody {
  pincode: number;
  place: string;
}
 
export interface Inventory {
  totalProducts: number;
  activeProducts: number;
  inActiveProducts: number;
  totalStock: number;
  _id: string;
  name: string;
  status: string;
}
 
export interface Products {
  _id: string;
  name: string;
  description: string;
  mrpPrice: number;
  discountPrice: number;
  status: "active" | "inActive"; // Assuming status can only be active or inActive
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
  stock?: number; // Optional property if present in some objects
}
 
export interface Company {
  srNo: number;
  id: string;
  name: string;
  publish : string;
  description?: string;
  image: string;
  basicRate: number;
  productCount: number;
}
 
export interface GST {
  value: number;
  type: string;
}
 
export interface PriceField {
  name: string;
  value: number;
  operation: string;
  type: string;
  position: number;
}

export interface Margin {
  cash: number;
  online: number;
}

type ImageUrl = string;
 
export interface Product {
  _id: string;
  name: string;
  itemCode: string;
  itemUnit: string;
  description: string;
  difference: number;
  type: string;
  basicRate: null | any; // You might want to specify the type instead of 'any'
  gst: GST;
  taxableValue: number;
  netRate: number;
  status: boolean;
  image: ImageUrl[];
  publish: boolean;
  productName: string;
  unit: string;
  companyName: string;
  priceField: PriceField[];
  margin: Margin;
}