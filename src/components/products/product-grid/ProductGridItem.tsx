"use client";

import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classes from "./ProductGridItem.module.css";

type Props = {
  product: Product;
};

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  return (
    <div className={`${classes.container} fade-in`}>
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className={classes.image}
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
          priority
        />
      </Link>

      <div className={classes["content-container"]}>
        <Link className={classes.link} href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className={classes.price}>${product.price}</span>
      </div>
    </div>
  );
};
