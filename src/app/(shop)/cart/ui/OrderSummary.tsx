"use client";

import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import { useEffect, useState } from "react";
import classes from "./OrderSummary.module.css";

export const OrderSummary = () => {
  const { subTotal, tax, total, itemsInCart } = useCartStore((state) =>
    state.getSummaryInformation()
  );

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <>{/* TODO: HACER EL SKELETON DEL CONTENIDO */}</>;

  return (
    <div className={classes["order-content"]}>
      <span>No. Products</span>
      <span className={classes["order-result"]}>
        {itemsInCart > 1 ? `${itemsInCart} items` : "1 item"}
      </span>

      <span>Subtotal</span>
      <span className={classes["order-result"]}>
        {currencyFormat(subTotal)}
      </span>

      <span>TAX (15%)</span>
      <span className={classes["order-result"]}>{currencyFormat(tax)}</span>

      <span className={classes["order-total"]}>Total:</span>
      <span
        className={`${classes["order-result"]} ${classes["order-result--total"]}`}
      >
        {currencyFormat(total)}
      </span>
    </div>
  );
};
