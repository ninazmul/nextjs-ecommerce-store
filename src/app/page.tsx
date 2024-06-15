import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <div className="">
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl font-semibold">Featured Products</h1>
        <Suspense fallback={"loading..."}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!}
            limit={4}
            hidePagination={true}
          />
        </Suspense>
      </div>
      <div className="mt-24 ">
        <h1 className="text-2xl font-semibold px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
          Categories
        </h1>
        <Suspense fallback={"loading..."}>
          <CategoryList />
        </Suspense>
      </div>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
        <h1 className="text-2xl font-semibold">New Products</h1>
        <Suspense fallback={"loading..."}>
          <ProductList
            categoryId={process.env.NEW_PRODUCTS_CATEGORY_ID!}
            limit={4}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default HomePage;
