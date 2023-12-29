import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  const { categories, users, products } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  //Categories
  const categoriesData = categories.map((name) => ({
    name,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  //Products

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLocaleLowerCase()] = category.id;

    return map;
  }, {} as Record<string, string>);
  products.forEach(async (product) => {
    const { images, type, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    //ProductImage
    const ImagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: ImagesData,
    });
  });

  console.log("Seed ejecutado correctamente");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
