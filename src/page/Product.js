import React from "react";
import CardProduct from "../components/product/CardProduct";
import Pagination from "../components/product/Pagination";

const Product = () => {
  return (
    <div>
      <>
        {/* card list  */}
        <div className="flex flex-wrap ">
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <Pagination />
      </>
    </div>
  );
};

export default Product;
