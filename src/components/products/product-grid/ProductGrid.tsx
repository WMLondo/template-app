import { Product } from "@/types";
import { FC } from "react";
import classes from "./ProductGrid.module.css";
import { ProductGridItem } from "./ProductGridItem";

type Props = {
  products: Product[];
};

export const ProductGrid: FC<Props> = ({ products }) => {
  return (
    <div className={classes.container}>
      {products.map((product) => (
        <ProductGridItem product={product} key={product.slug} />
      ))}
    </div>
  );
};
