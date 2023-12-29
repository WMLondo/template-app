import { Title } from "@/components";Link
import Link from "next/link";
import classes from "./Cart.module.css";
import { OrderSummary } from "./ui/OrderSummary";
import { ProductInCart } from "./ui/ProductInCart";

export default function CartPage() {
  //redirect("/empty");

  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Title title="Cart" />
        <div className={classes.cart}>
          <div className={classes["subtitle-container"]}>
            <span className={classes.message}>Add more items</span>
            <Link href="/" className={classes.link}>
              Keep shopping
            </Link>
            <ProductInCart />
          </div>
          <div className={classes["order-summary"]}>
            <h2 className={classes["summary-title"]}>Order Summary</h2>
            <OrderSummary />
            <div className={classes["action-container"]}>
              <Link
                className={`btn-primary ${classes.button}`}
                href="/checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
