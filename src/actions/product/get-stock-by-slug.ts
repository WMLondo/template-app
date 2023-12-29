"use server";

import prisma from "@/lib/prisma";

export const getStockBySlug = async (slug: string) => {
  try {
    const stock = await prisma.product.findFirst({
      select: {
        inStock: true,
      },
      where: { slug: slug },
    });

    if (!stock) return 0;

    return stock.inStock;
  } catch (error) {
    throw new Error("Could not get the stock value using the slug");
  }
};
