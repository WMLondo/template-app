import { Title } from "@/components";
import Link from "next/link";
import classes from "./Address.module.css";

export default function AddressPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes["content-container"]}>
        <Title title="Address" subtitle="Delivery Address" />

        <div className={classes["grid-container"]}>
          <div className={classes["input-container"]}>
            <span>Name</span>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes["input-container"]}>
            <span>Last name</span>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes["input-container"]}>
            <span>Address</span>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes["input-container"]}>
            <span>Address 2 (optional)</span>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes["input-container"]}>
            <span>Postal Code</span>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes["input-container"]}>
            <span>City</span>
            <input type="text" className={classes.input} />
          </div>

          <div className={classes["input-container"]}>
            <span>Country</span>
            <select className={classes.input}>
              <option value="">[ Seleccione ]</option>
              <option value="CRI">Costa Rica</option>
            </select>
          </div>

          <div className={classes["input-container"]}>
            <span>Phone Number</span>
            <input type="text" className={classes.input} />
          </div>
          <div className={classes["action-container"]}>
            <Link href="/checkout" className={`btn-primary ${classes.button}`}>
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
