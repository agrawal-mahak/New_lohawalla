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