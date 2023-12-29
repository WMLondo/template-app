import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import classes from "./PageNotFound.module.css";

export const PageNotFound = () => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.container}>

      <h2 className={`${titleFont.className} ${classes.title}`}>404</h2>
      <p className={classes.paragraph}>Whoops! We&lsquore so sorry.</p>
      <p className={classes["font-light"]}>
        <span>Please navigate back to </span>
        <Link href="/" className={classes.link}>
          Home
        </Link>
      </p>
        </div>

      <div className={classes["image-container"]}>
        <Image
          src="/imgs/starman_750x750.png"
          alt="Starman"
          width={550}
          height={550}
        />
      </div>
    </div>
  );
};
