import { Title } from "@/components";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";
import classes from "./Orders.module.css";

const OrdersComponent = () => {
  return (
    <>
      <Title title="Orders" />

      <div style={{ marginBottom: "2.25rem" }}>
        <table className={classes.table}>
          <thead>
            <tr>
              <th>#ID</th>
              <th>Full name</th>
              <th>Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr className={classes["table-row"]}>
              <td>1</td>
              <td>Mark</td>
              <td>
                <IoCardOutline className={classes.green} />
                <span className={`${classes["status-text"]} ${classes.green}`}>
                  Paid
                </span>
              </td>
              <td>
                <Link href="/orders/123" className={classes.link}>
                  View Order
                </Link>
              </td>
            </tr>

            <tr className={classes["table-row"]}>
              <td>1</td>
              <td>Mark</td>
              <td>
                <IoCardOutline className={classes.red} />
                <span className={`${classes["status-text"]} ${classes.red}`}>
                  Pending
                </span>
              </td>
              <td>
                <Link href="/orders/123" className={classes.link}>
                  View Order
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrdersComponent;
