import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";
import classes from "./Checkout.module.css";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckoutPage() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <Title title="Confirm order" />
        <div className={classes.cart}>
          <div className={classes["subtitle-container"]}>
            <span className={classes.message}>Add more items</span>
            <Link href="/cart" className={classes.link}>
              Adjust items
            </Link>
            {productsInCart.map((product) => (
              <div key={product.slug} className={classes.item}>
                <Image
                  src={`/products/${product.images[0]}`}
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
                  <p>{product.title}</p>
                  <p>{product.price} x 3</p>
                  <p style={{ fontWeight: "bold" }}>
                    Subtotal: ${product.price * 3}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={classes["order-summary"]}>
            <h2 className={classes["summary-title"]}>Delivery Address</h2>
            <div style={{ marginBottom: "2.25rem" }}>
              <p style={{ fontSize: "1.25rem" }}>John Smith</p>
              <p>505 E Liberty St #300</p>
              <p>Ann Arbor</p>
              <p>Michigan</p>
              <p>48104</p>
              <p>48104</p>
              <p>(734) 827-2233</p>
            </div>

            <div
              style={{
                width: "100%",
                height: "0.125rem",
                borderRadius: "0.25rem",
                backgroundColor: "#E5E7EB",
                marginBottom: "2.25rem",
              }}
            />

            <h2 className={classes["summary-title"]}>Order Summary</h2>
            <div className={classes["order-content"]}>
              <span>No. Items</span>
              <span className={classes["order-result"]}>3 items</span>

              <span>Subtotal</span>
              <span className={classes["order-result"]}>$ 100</span>

              <span>TAX (15%)</span>
              <span className={classes["order-result"]}>$ 100</span>

              <span className={classes["order-total"]}>Total:</span>
              <span
                className={`${classes["order-result"]} ${classes["order-result--total"]}`}
              >
                $ 100
              </span>
            </div>

            <div className={classes["action-container"]}>
              <p style={{ marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.75rem" }}>
                  By clicking on Place order, you accept our{" "}
                  <a
                    href="#"
                    style={{ textDecoration: "underline", fontSize: "0.75rem" }}
                  >
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    style={{ textDecoration: "underline", fontSize: "0.75rem" }}
                  >
                    privacy policy
                  </a>
                  .
                </span>
              </p>
              <Link
                className={`btn-primary ${classes.button}`}
                href="/orders/123"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
