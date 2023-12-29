"use client";

import { useUIStore } from "@/store/ui-store";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import classes from "./Sidebar.module.css";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeSideMenu = useUIStore((state) => state.closeSideMenu);

  return (
    <div>
      {isSideMenuOpen && (
        <>
          {/* Dark Backgroud */}
          <div className={classes.background} />
          {/* Blur */}
          <div
            className={`${classes["blur-background"]} fadeIn`}
            onClick={closeSideMenu}
          />
        </>
      )}
      {/* Sidemenu */}

      <nav
        //TODO: efecto de slide
        className={`${classes.container} ${isSideMenuOpen && classes.open}`}
      >
        <IoCloseOutline
          size={50}
          className={classes["close-icon"]}
          onClick={closeSideMenu}
        />

        <div className={classes["search-container"]}>
          <IoSearchOutline size={20} className={classes["search-icon"]} />
          <input
            type="text"
            placeholder="Search"
            className={classes["search-input"]}
          />
        </div>

        {/* Menu */}
        <Link href="/profile" className={classes.link}>
          <IoPersonOutline size={30} />{" "}
          <span className={classes["link-content"]}>Profile</span>
        </Link>
        <Link href="/orders" className={classes.link}>
          <IoTicketOutline size={30} />{" "}
          <span className={classes["link-content"]}>Orders</span>
        </Link>
        <Link href="/auth/login" className={classes.link}>
          <IoLogInOutline size={30} />{" "}
          <span className={classes["link-content"]}>Login</span>
        </Link>
        <Link href="/" className={classes.link}>
          <IoLogOutOutline size={30} />{" "}
          <span className={classes["link-content"]}>Logout</span>
        </Link>

        {/* Line Separator */}
        <div className={classes.separator} />

        {/* Menu */}
        <Link href="/" className={classes.link}>
          <IoShirtOutline size={30} />{" "}
          <span className={classes["link-content"]}>Products</span>
        </Link>
        <Link href="/" className={classes.link}>
          <IoTicketOutline size={30} />{" "}
          <span className={classes["link-content"]}>Orders</span>
        </Link>
        <Link href="/" className={classes.link}>
          <IoPeopleOutline size={30} />{" "}
          <span className={classes["link-content"]}>Users</span>
        </Link>
      </nav>
    </div>
  );
};
