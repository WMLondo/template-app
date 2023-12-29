import { titleFont } from "@/config/fonts";
import classes from "./Title.module.css";

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`${className} ${classes.container}`}>
      <h1 className={`${titleFont.className} ${classes.title}`}>{title}</h1>
      {subtitle && <h3 className={classes.subtitle}>{subtitle}</h3>}
    </div>
  );
};
