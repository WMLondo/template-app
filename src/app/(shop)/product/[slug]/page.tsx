export const revalidate = 604800;

import {
  ProductMobileSlideshow,
  ProductSlideshow,
  QuantitySelector,
  SizeSelector,
  StockLabel,
} from "@/components";
import { titleFont } from "@/config/fonts";
import { notFound } from "next/navigation";
import classes from "../Product.module.css";
import { getProductBySlug } from "@/actions/product";
import type { Metadata, ResolvingMetadata } from "next";
import { AddToCart } from "./ui/AddToCart";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const product = await getProductBySlug(slug);

  return {
    title: product?.title ?? "Product not found" + "Teslo",
    description: product?.description ?? "",
    openGraph: {
      title: product?.title ?? "Product not found",
      description: product?.description ?? "",
      images: [`/products/${product?.images[1]}`],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }
  return (
    <div className={classes.container}>
      <div className={classes["slideshow-container"]}>
        {/* Slideshow Mobile*/}

        <ProductMobileSlideshow
          images={product.images}
          title={product.title}
          className={classes["slideshow-mobile"]}
        />
        {/* Slideshow Desktop*/}

        <ProductSlideshow
          images={product.images}
          title={product.title}
          className={classes.slideshow}
        />
      </div>
      <div className={classes.content}>
        <StockLabel slug={product.slug} />
        <h1 className={`${titleFont.className} ${classes.title}`}>
          {product.title}
        </h1>
        <p className={classes.price}>${product.price}</p>

        <AddToCart product={product} />

        <h3 className={classes.description}>Description</h3>
        <p className={classes["content-description"]}>{product.description}</p>
      </div>
    </div>
  );
}
