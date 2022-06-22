import React from "react";
import CardProduct from "../components/Product/CardProduct";
import Pagination from "../components/Product/Pagination";
import TabBar from "../components/Product/Tabs";
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
