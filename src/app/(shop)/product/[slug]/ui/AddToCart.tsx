"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { CartProduct, Product, ValidSizes } from "@/types";
import classes from "./AddToCart.module.css";
import { useState } from "react";
import { useCartStore } from "@/store";

type Props = {
  product: Product;
};

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [size, setSize] = useState<ValidSizes | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [touched, setTouched] = useState(false);

  const AddToCart = () => {
    setTouched(true);
    if (!size) return;

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setTouched(false);
    setSize(undefined);
    setQuantity(1);
  };

  return (
    <>
      {touched && !size && (
        <span className={classes["error-message"]}>
          You must select a size first
        </span>
      )}
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={size}
        onSizeChanged={setSize}
      />

      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      <button className={`btn-primary ${classes.button}`} onClick={AddToCart}>
        Add to cart
      </button>
    </>
  );
};
