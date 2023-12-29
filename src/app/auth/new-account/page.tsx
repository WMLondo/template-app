import { titleFont } from "@/config/fonts";
import Link from "next/link";
import classes from "./NewAccount.module.css";

export default function NewAccount() {
  return (
    <div className={classes.wrapper}>
      <h1 className={`${titleFont.className} ${classes.title}`}>Sign Up</h1>

      <div className={classes.container}>
        <label htmlFor="name">Name</label>
        <input className={classes.input} type="name" />

        <label htmlFor="last-name">Last Name</label>
        <input className={classes.input} type="last-name" />

        <label htmlFor="email">Email</label>
        <input className={classes.input} type="email" />

        <label htmlFor="password">Password</label>
        <input className={classes.input} type="password" />

        <button className={classes["btn-primary"]}>Sign In</button>

        {/* divisor line */}
        <div className={classes.divisor}>
          <div className={classes.header}></div>
          <div className={classes.content}>O</div>
          <div className={classes.footer}></div>
        </div>

        <Link
          href="/auth/login"
          className={classes["btn-secondary"]}
          style={{ textAlign: "center" }}
        >
          Already have an account?
        </Link>
      </div>
    </div>
  );
}
