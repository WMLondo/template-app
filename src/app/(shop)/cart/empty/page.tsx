import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import classes from "./Empty.module.css";

export default function EmptyPage() {
  return (
    <div className={classes.wrapper}>
      <IoCartOutline
        size={80}
        style={{ marginLeft: "1rem", marginRight: "1rem" }}
      />

      <div className={classes["content-container"]}>
        <h1 className={classes.title}>Your cart is empty</h1>

        <Link href="/" className={classes.link}>
          Go back
        </Link>
      </div>
    </div>
  );
}
