import { wixClientServer } from "@/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function CategoryList() {
  try {
    const wixClient = await wixClientServer();

    if (
      !wixClient ||
      !wixClient.collections ||
      !wixClient.collections.queryCollections
    ) {
      console.error(
        "Wix client or collections API is not initialized properly"
      );
      return <div>Error: Unable to fetch categories</div>;
    }

    const categories = await wixClient.collections.queryCollections().find();

    return (
      <div className="px-4 overflow-x-scroll scrollbar-hide mt-12">
        <div className="flex gap-4 md:gap-8">
          {categories.items.map((item) => (
            <Link
              key={item._id}
              href={`/list?categories=${item.slug}`}
              className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 flex-col items-center justify-center text-center"
            >
              <div className="relative bg-orange/10 w-32 md:w-56 h-32 md:h-56 rounded-full">
                <Image
                  src={item.media?.mainMedia?.image?.url || "/cat.png"}
                  alt={`${item.name}`}
                  fill
                  sizes="20vw"
                  className="object-cover rounded-full"
                />
              </div>
              <h1 className="mt-4 md:mt-8 font-light md:text-xl tracking-wide">
                {item.name}
              </h1>
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching categories:", error);
    return <div>Error: Unable to fetch categories</div>;
  }
}
