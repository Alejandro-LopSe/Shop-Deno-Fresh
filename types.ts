export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  cuantity?: number;
};

export type CartProduct = {
  product: Product;
  cuantity: number;
};

export type Country = {
  [key: string]: {
    country: string;
  };
};

export type C_selected = {
  selected: string;
  data: Cities;
};
export type Cities = {
  [key: number]: {
    city: string;
  };
};
