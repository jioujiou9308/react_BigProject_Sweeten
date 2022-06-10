import React from "react";
import CardProduct from "../components/Product/CardProduct";
import Pagination from "../components/Product/Pagination";

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
