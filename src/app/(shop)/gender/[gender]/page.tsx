export const revalidate = 60;

import { getPaginatedProductsWithImages } from "@/actions/product";
import { Pagination, ProductGrid, Title } from "@/components";
import type { ValidCategory } from "@/types";
import classes from "./Category.module.css";

interface Props {
  params: {
    gender: ValidCategory;
  };
  searchParams: {
    page?: string;
  };
}

export default async function GenderPage({ params, searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { gender } = params;

  const labels: Record<ValidCategory, string> = {
    men: "Men",
    women: "Women",
    kid: "Kids",
    unisex: "Everyone",
  };

  const { products, currentPage, totalPages } =
    await getPaginatedProductsWithImages({ page, gender });

  return (
    <div className={classes.wrapper}>
      <Title
        title={`Articles for ${labels[gender]}`}
        subtitle="All Products"
        className={classes.title}
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
