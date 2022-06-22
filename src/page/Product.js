import React from "react";
import CardProduct from "../components/product/CardProduct";
import Pagination from "../components/product/Pagination";
import TabBar from "../components/product/Tabs";
import { useProductState } from "../utils/redux/hooks-redux";

const Product = () => {
  const [productState, setProduct] = useProductState();
  return (
    <div>
      <>
        {/* card list  */}
        <div className="flex flex-wrap ">
          <TabBar />
          <CardProduct />
        </div>
        <Pagination />
        <button
          onClick={() => {
            setProduct("hi");
          }}
        >
          click
        </button>
      </>
    </div>
  );
};

export default Product;
