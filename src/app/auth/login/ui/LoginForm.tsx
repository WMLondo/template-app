"use client";
import { authenticate } from "@/actions/auth/login";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { IoInformationOutline } from "react-icons/io5";
import classes from "./LoginForm.module.css";

export const LoginForm = () => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch} className={classes.container}>
      <label htmlFor="email">Email</label>
      <input className={classes.input} type="email" name="email" />

      <label htmlFor="password">Password</label>
      <input className={classes.input} type="password" name="password" />

      <LoginButton />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {errorMessage && (
          <div className={classes["error-container"]}>
            <IoInformationOutline className={classes["error-msg"]} />
            <p className={classes["error-msg"]}>{errorMessage}</p>
          </div>
        )}
      </div>

      {/* divisor line */}
      <div className={classes.divisor}>
        <div className={classes.header}></div>
        <div className={classes.content}>O</div>
        <div className={classes.footer}></div>
      </div>

      <Link
        href="/auth/new-account"
        className={classes["btn-secondary"]}
        style={{ textAlign: "center" }}
      >
        New at Teslo?
      </Link>
    </form>
  );
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`${
        pending ? classes["btn-disabled"] : classes["btn-primary"]
      }`}
      disabled={pending}
    >
      Sign in
    </button>
  );
}
