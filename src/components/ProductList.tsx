import { wixClientServer } from "@/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";

const PRODUCT_PER_PAGE = 20;

export default async function ProductList({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string;
  limit?: number;
  searchParams?: any;
}) {
  try {
    const wixClient = await wixClientServer();

    const res = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit || PRODUCT_PER_PAGE)
      .find();

    return (
      <div className="flex flex-wrap justify-between gap-x-8 gap-y-16 mt-12">
        {res.items.map((product: products.Product) => (
          <Link
            key={product._id}
            href={"/" + product.slug}
            passHref
            legacyBehavior
          >
            <a className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] p-4 rounded-md shadow-gray-400 shadow-md bg-orange/10">
              <div className="relative w-full h-72">
                <Image
                  src={product.media?.mainMedia?.image?.url || "/product.png"}
                  alt={`${product.name}`}
                  fill
                  sizes="25vw"
                  className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
                />
                {product.media?.items && (
                  <Image
                    src={product.media?.items[1]?.image?.url || "/product.png"}
                    alt={`${product.name}`}
                    fill
                    sizes="25vw"
                    className="absolute object-cover rounded-md"
                  />
                )}
              </div>
              <div className="flex justify-between gap-4">
                <p className="font-medium line-clamp-1">{product.name}</p>
                <div className="flex gap-1 items-start">
                  {product.price?.price === product.price?.discountedPrice ? (
                    <h2 className="font-medium text-lg">
                      ${product.price?.price}
                    </h2>
                  ) : (
                    <>
                      <h3 className="text-sm text-gray-500 line-through">
                        ${product.price?.price}
                      </h3>
                      <h2 className="font-medium text-lg">
                        ${product.price?.discountedPrice}
                      </h2>
                    </>
                  )}
                </div>
              </div>
              {product.additionalInfoSections && (
                <div>
                  <p
                    className="text-sm text-gray-500 line-clamp-1"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(
                        product.additionalInfoSections.find(
                          (section: any) => section.title === "shortDesc"
                        )?.description || ""
                      ),
                    }}
                  />
                </div>
              )}
              <button className="rounded-2xl ring-1 ring-orange text-orange py-2 px-4 hover:bg-orange hover:text-white font-semibold transition-all duration-300 ease-in-out">
                Add to Cart
              </button>
            </a>
          </Link>
        ))}
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div>Error fetching products. Please try again later.</div>;
  }
}
