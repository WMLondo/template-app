import type { ValidSizes } from "@/types";
import classes from "./SizeSelector.module.css";

type Props = {
  selectedSize?: ValidSizes;
  availableSizes: ValidSizes[];

  onSizeChanged: (size: ValidSizes) => void;
};

export const SizeSelector = ({
  selectedSize,
  availableSizes,
  onSizeChanged,
}: Props) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Available Sizes:</h3>{" "}
      <div className={classes["sizes-container"]}>
        {availableSizes.map((size) => (
          <button
            className={`${classes.size} ${
              size === selectedSize ? classes.selected : ""
            }`}
            key={size}
            onClick={() => onSizeChanged(size)}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};
