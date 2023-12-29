import { getPaginatedProductsWithImages } from "@/actions/product";
import { ProductGrid, Title } from "@/components";
import classes from "./Home.module.css";
import { redirect } from "next/navigation";
import { Pagination } from "@/components";

type Props = {
  searchParams: {
    page?: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect("/");
  }
  return (
    <div className={classes.wrapper}>
      <Title title="Store" subtitle="All products" className={classes.title} />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
