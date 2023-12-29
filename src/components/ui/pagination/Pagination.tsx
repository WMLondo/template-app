"use client";
import { generatePagination } from "@/utils";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import classes from "./Pagination.module.css";

type Props = {
  totalPages: number;
};

export const Pagination = ({ totalPages }: Props) => {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const pageString = searchParams.get("page") ?? 1;

  let currentPage = isNaN(+pageString) ? 1 : +pageString;

  if (currentPage < 1 || isNaN(+pageString)) {
    redirect(pathname);
  }

  const allPages = generatePagination(currentPage, totalPages);

  const createPageUrl = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);

    if (pageNumber === "...") {
      return `${pathname}?${params.toString()}`;
    }

    if (+pageNumber <= 0) {
      return `${pathname}`;
    }

    if (+pageNumber > totalPages) {
      return `${pathname}?${params.toString()}`;
    }

    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className={classes.pagination}>
      <nav aria-label="Page navigation example">
        <ul className={classes["pagination-list"]}>
          <li className={`${classes["pagination-item"]}`}>
            <Link
              className={classes["pagination-link"]}
              href={createPageUrl(currentPage - 1)}
              tabIndex={-1}
              aria-disabled="true"
            >
              <IoChevronBackOutline />
            </Link>
          </li>

          {allPages.map((page, index) => (
            <li
              key={page + "-" + index}
              className={`${classes["pagination-item"]}  ${
                page === currentPage && classes["pagination-item--active"]
              }`}
            >
              <Link
                className={classes["pagination-link"]}
                href={createPageUrl(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className={classes["pagination-item"]}>
            <Link
              className={classes["pagination-link"]}
              href={createPageUrl(currentPage + 1)}
            >
              <IoChevronForwardOutline />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
