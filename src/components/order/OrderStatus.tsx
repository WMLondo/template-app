import { IoCardOutline } from "react-icons/io5";
import classes from "./OrderStatus.module.css";

type Props = {
  status: boolean;
};

export const OrderStatus = ({ status }: Props) => {
  return (
    <div
      className={`${classes["order-confirmation"]} ${
        status ? classes.complete : classes.pending
      }`}
    >
      <IoCardOutline size={30} />
      <span style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}>
        {status ? "Paid" : "Pending"}
      </span>
    </div>
  );
};
