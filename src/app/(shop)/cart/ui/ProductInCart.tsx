"use client";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import classes from "./ProductInCart.module.css";

export const ProductInCart = () => {
  const productsInCart = useCartStore((state) => state.cart);
  const updateProductQuantity = useCartStore(
    (state) => state.updateProductQuantity
  );
  const removeProduct = useCartStore((state) => state.removeProduct);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <div className={classes.cartContainer}>
        <div className={classes.item}>
          <div className={classes.itemImageSkeleton}></div>
          <div className={classes.itemDetails}>
            <div className={classes.titleSkeleton}></div>
            <div className={classes.priceSkeleton}></div>
            <div className={classes.quantitySelectorSkeleton}></div>
            <div className={classes.removeButtonSkeleton}></div>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.itemImageSkeleton}></div>
          <div className={classes.itemDetails}>
            <div className={classes.titleSkeleton}></div>
            <div className={classes.priceSkeleton}></div>
            <div className={classes.quantitySelectorSkeleton}></div>
            <div className={classes.removeButtonSkeleton}></div>
          </div>
        </div>
        <div className={classes.item}>
          <div className={classes.itemImageSkeleton}></div>
          <div className={classes.itemDetails}>
            <div className={classes.titleSkeleton}></div>
            <div className={classes.priceSkeleton}></div>
            <div className={classes.quantitySelectorSkeleton}></div>
            <div className={classes.removeButtonSkeleton}></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {productsInCart.map((product) => (
        <div key={`${product.slug}-${product.size}`} className={classes.item}>
          <Image
            src={`/products/${product.image}`}
            alt={product.title}
            width={100}
            height={100}
            style={{
              width: "100px",
              height: "100px",
            }}
            className={classes["item-image"]}
          />
          <div>
            <Link href={`product/${product.slug}`} className={classes.link}>
              {product.title}
            </Link>
            <p>{product.price}</p>
            <QuantitySelector
              quantity={product.quantity}
              onQuantityChanged={(quantity) => {
                updateProductQuantity(product, quantity);
              }}
            />

            <button
              onClick={() => removeProduct(product)}
              style={{
                textDecoration: "underline",
                marginTop: "0.75rem",
                cursor: "pointer",
                background: "none",
              }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
