export type Product = {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: ValidSizes[];
  slug: string;
  tags: string[];
  title: string;
  //TODO: type: ValidTypes;
  gender: ValidCategory;
};

export type CartProduct = {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: ValidSizes;
  image:string
};

export type ValidCategory = "men" | "women" | "kid" | "unisex";
export type ValidSizes = "XS" | "S" | "M" | "L" | "XL" | "XXL" | "XXXL";
export type ValidTypes = "shirts" | "pants" | "hoodies" | "hats";

export type Products = {
  products: Product[];
};
