import React from "react";
import { useCartState } from "../../utils/redux/hooks-redux";
import ProductItem from "./ProductItem";

function OrderList() {
  const [cart, setCart] = useCartState();
  return (
    <>
      <div className="p-8 bg-white lg:w-2/3 md:p-12" id="scroll">
        <p className="font-black h3">購物車</p>
        {cart[1].map((product, i) => {
          const { id, name, categroy, image, price, count, size, flavor } =
            product;
          return (
            <ProductItem
              key={id}
              id={id}
              name={name}
              categroy={categroy}
              price={price}
              image={image}
              count={count}
              size={size}
              flavor={flavor}
            product={product}
              
            />
          );
        })}
      </div>
    </>
  );
}

export default OrderList;
