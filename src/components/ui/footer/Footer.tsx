import { titleFont } from "@/config/fonts";
import Link from "next/link";
import classes from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Link href="/">
        <span className={`${titleFont.className} ${classes.title}`}>Teslo</span>
        <span>| shop</span>
        <span>© {new Date().getFullYear()}</span>
      </Link>

      <Link href="/" style={{ marginLeft: "0.75rem", marginRight: "0.75rem" }}>
        Privacidad & Legal
      </Link>
      <Link href="/" style={{ marginLeft: "0.75rem", marginRight: "0.75rem" }}>
        Ubicaciones
      </Link>
    </footer>
  );
};
