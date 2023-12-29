import prisma from "@/lib/prisma";
import { Gender } from "@prisma/client";

`use server`;

type PaginationOptions = {
  page?: number;
  take?: number;
  gender?: string;
};

export const getPaginatedProductsWithImages = async ({
  page = 1,
  take = 12,
  gender,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    const products = await prisma.product.findMany({
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      skip: (page - 1) * take,
      take: take,

      //! Por género
      where: {
        gender: gender as Gender,
      },
    });

    const totalCount = await prisma.product.count({
      where: {
        gender: gender as Gender,
      },
    });
    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error("Could not charge products");
  }
};
