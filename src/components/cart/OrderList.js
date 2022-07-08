import React from "react";
import { useCartState } from "../../utils/redux/hooks-redux";
import ProductItem from "./ProductItem";

function OrderList() {
  const [cart, setCart] = useCartState();
  console.log(cart);
  return (
    <>
      {cart[1].length < 1 ? (
        <div className="p-8 bg-white lg:w-2/3 md:p-12" id="scroll">
          <p className="pb-5 h3">購物車</p>
          <hr />
          <div className="flex justify-center w-full mt-5 h-80">
           <div className="justify-center">
            <img className="inline-block w-20 h-20 " src={`/images/gif/cookie.gif`} alt=""/>
            <p className="inline-block align-middle h4">哎呀！尚未選購美味甜點呦</p>
           </div>
          </div>
          
        </div>
      ) : (
        <div className="p-8 bg-white lg:w-2/3 md:p-12" id="scroll">
          <p className="h3">購物車</p>

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
      )}
    </>
  );
}

export default OrderList;
