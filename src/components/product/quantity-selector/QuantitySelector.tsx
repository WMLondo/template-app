"use client";

import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";
import classes from "./QuantitySelector.module.css";

type Props = {
  quantity?: number;
  defaultQuantity?: number;
  onQuantityChanged: (quantity: number) => void;
};

export const QuantitySelector = ({
  quantity,
  defaultQuantity = 1,
  onQuantityChanged,
}: Props) => {
  const onValueChange = (value: number) => {
    onQuantityChanged(value + quantity!);
  };

  return (
    <div className={classes.container}>
      <button
        disabled={quantity === 1}
        className={classes.button}
        onClick={() => onValueChange(-1)}
      >
        <IoRemoveOutline />
      </button>
      <span className={classes.input}>{quantity || defaultQuantity}</span>
      <button
        disabled={quantity === 5}
        className={classes.button}
        onClick={() => onValueChange(1)}
      >
        <IoAddOutline />
      </button>
    </div>
  );
};
