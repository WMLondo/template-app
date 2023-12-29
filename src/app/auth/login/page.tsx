import { titleFont } from "@/config/fonts";
import classes from "./Login.module.css";
import { LoginForm } from "./ui/LoginForm";

export default function Login() {
  return (
    <div className={classes.wrapper}>
      <h1 className={`${titleFont.className} ${classes.title}`}>Sign In</h1>
      <LoginForm />
    </div>
  );
}
