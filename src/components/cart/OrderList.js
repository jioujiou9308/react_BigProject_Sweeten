import React from "react";
import ProductItem from "./ProductItem";

function OrderList(props) {
  const { productsInOrder, setProductsInOrder } = props;

  return (
    <>
      <div className="p-8 bg-white lg:w-2/3 md:p-12" id="scroll">
        <p className="font-black h2">Bag</p>
        {productsInOrder.map((product, i) => {
          const { id, name, categroy, image, price, count, size, flavor } = product;
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
              setCount={(newCount) => {
                const newProductsInOrder = productsInOrder.map((value) => {
                  return { ...value };
                });
                newProductsInOrder[i].count = newCount < 1 ? 1 : newCount;

                setProductsInOrder(newProductsInOrder);
              }}
              removeItem={() => {
                const newProductsInOrder = productsInOrder.filter(
                  (value, index) => {
                    return value.id !== product.id;
                  }
                );
                setProductsInOrder(newProductsInOrder);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default OrderList;