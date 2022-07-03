import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiOutlineDelete,
} from "react-icons/ai";

function ProductItem(props) {
  const { name, size, flavor, count, image, price, setCount, removeItem } =
    props;

  return (
    <>
      {/* each item div */}
      <div className="items-center py-5 mt-6 border-t md:flex">
        <div className="w-full md:w-1/4">
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-none max-h-40"
          />
        </div>
        <div className="md:pl-3 md:w-3/4">
          <div className="flex items-center justify-between w-full pt-1">
            <p className="font-black h4">{name}</p>
            <div className="flex items-center">
              <AiOutlineMinus
                onClick={() => {
                  setCount(count - 1);
                }}
              />
              <p className="p-3 text-lg">{count}</p>
              <AiOutlinePlus
                onClick={() => {
                  setCount(count + 1);
                }}
              />
            </div>
          </div>
          <p className="pt-2 text-sm leading-3">Size: {size}</p>
          <p className="py-4 text-sm leading-3 ">Flavor: {flavor}</p>
          <div className="flex items-center justify-between pt-4">
            <div className="flex">
              <div className="flex items-center mr-5">
                <AiOutlineHeart className="icon" />
                收藏
              </div>
              <div className="flex items-center" onClick={removeItem}>
                <AiOutlineDelete className="icon" />
                刪除
              </div>
            </div>
            <p className="text-base font-black ">${price} </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
