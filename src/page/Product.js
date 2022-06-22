import React from "react";
import ProductList from "../components/product/ProductList";
import Filter from "../components/product/Filter";
import ProductPagination from "../components/product/ProductPagination";

import MenuTag from "../components/menuTag/MenuTag";
// import TabBar from "../components/product/Tabs";

const Product = () => {
  // const [productState, setProduct] = useProductState();
  return (
    <>
      <div className=" md:flex">
        <MenuTag />
        {/* filter section */}
        <Filter />
        {/* card list  */}
        <div className="flex flex-wrap ">
          <ProductList />
        </div>
      </div>
      <ProductPagination />
    </>
  );
};

export default Product;
