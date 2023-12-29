"use client";
import { getStockBySlug } from "@/actions/product";
import { titleFont } from "@/config/fonts";
import { useEffect, useState } from "react";
import classes from "./StockLabel.module.css";

type Props = {
  slug: string;
};

export const StockLabel = ({ slug }: Props) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const inStock = await getStockBySlug(slug);
    setStock(inStock);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <h1 className={classes.skeleton}>&nbsp;</h1>
      ) : (
        <h1 className={`${titleFont.className} ${classes.label}`}>
          Stock: {stock}
        </h1>
      )}
    </>
  );
};
