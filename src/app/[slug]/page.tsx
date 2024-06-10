import Add from "@/components/Add";
import CustomizeProducts from "@/components/CustomizeProducts";
import ProductsImages from "@/components/ProductsImages";
import { wixClientServer } from "@/wixClientServer";
import { notFound } from "next/navigation";
import React from "react";

export default async function SinglePage({
  params,
}: {
  params: { slug: string };
}) {
  const wixClient = await wixClientServer();

  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items || products.items.length === 0) {
    return notFound();
  }

  const product = products.items[0];
  console.log(product)

  const Separator = () => <div className="h-[2px] bg-orange/10" />;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col md:flex-row gap-16">
      {/* Image Section */}
      <div className="w-full md:w-1/2 md:sticky top-20 h-max">
        <ProductsImages items={product.media?.items} />
      </div>
      {/* Text Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">{product.description}</p>
        <Separator />
        {/* Price Display */}
        <div className="flex items-center gap-4">
          {product.price?.price === product.price?.discountedPrice ? (
            <h2 className="font-medium text-2xl">${product.price?.price}</h2>
          ) : (
            <>
              <h3 className="text-xl text-gray-500 line-through">
                ${product.price?.price}
              </h3>
              <h2 className="font-medium text-2xl">
                ${product.price?.discountedPrice}
              </h2>
            </>
          )}
        </div>
        <Separator />
        {product.variants && product.productOptions && (
          <CustomizeProducts
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}
        <Add />
        <Separator />
        {/* Additional Info Sections */}
        {product.additionalInfoSections?.map((section: any) => (
          <div key={section._id} className="text-sm">
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
