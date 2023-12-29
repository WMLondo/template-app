"use client";

import { titleFont } from "@/config/fonts";
import { useCartStore } from "@/store";
import { useUIStore } from "@/store/ui-store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import classes from "./TopMenu.module.css";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className={classes.container}>
      {/* Logo */}

      <div>
        <Link href="/">
          <span className={`${titleFont.className} ${classes.title}`}>
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>

      {/* Center Menu */}

      <div className={classes["categories-container"]}>
        <Link className={classes.category} href="/gender/men">
          Men
        </Link>
        <Link className={classes.category} href="/gender/women">
          Women
        </Link>
        <Link className={classes.category} href="/gender/kid">
          Kids
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className={classes["tags-container"]}>
        <Link href="/" className={classes.tag}>
          <IoSearchOutline className={classes.icon} />
        </Link>
        <Link
          href={totalItemsInCart === 0 && loaded ? "/cart/empty" : "/cart"}
          className={classes.tag}
        >
          <div className={classes.cart}>
            {loaded && totalItemsInCart > 0 && (
              <span className={classes.badge}>{totalItemsInCart}</span>
            )}
            <IoCartOutline className={classes.icon} />
          </div>
        </Link>
        <button className={classes.button} onClick={openSideMenu}>
          Menu
        </button>
      </div>
    </nav>
  );
};
