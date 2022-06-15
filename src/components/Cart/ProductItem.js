import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineHeart,
  AiOutlineDelete,
} from "react-icons/ai";

function ProductItem(props) {
  const { id, name, size, flavor, categroy, count, image, price, setCount, removeItem } = props;

  return (
    <>
      {/* <div className="row border-top border-bottom">
        <div className="row main align-items-center">
          <div className="col-2">
            <img alt="" className="img-fluid" src={image} />
          </div>
          <div className="col">
            <div className="row text-muted">{categroy}</div>
            <div className="row">{name}</div>
          </div>
          <div className="col">
            <a
              href="#/"
              onClick={() => {
                setCount(count - 1);
              }}
            >
              -
            </a>
            <a href="#/" className="border">
              {count}
            </a>
            <a
              href="#/"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </a>
          </div>
          <div className="col">
            ${price}{" "}
            <span className="close" onClick={removeItem}>
              &#10005;
            </span>
          </div>
        </div>
      </div> */}
      {/* each item div */}
      <div className="items-center py-8 border-t border-gray-200 md:flex mt-14">
        <div className="w-full md:w-1/4">
          <img
             src={image} 
            alt=""
            className="object-cover object-center w-full max-h-40"
          />
        </div>
        <div className="md:pl-3 md:w-3/4">
          <div className="flex items-center justify-between w-full pt-1">
            <p className="font-black h4">{name}</p>
            <div className="flex items-center">
              <AiOutlineMinus onClick={() => {
                setCount(count - 1);
              }}/>
              <p className="p-3 text-lg">{count}</p>
              <AiOutlinePlus onClick={() => {
                setCount(count + 1);
              }}/>
            </div>
          </div>
          <p className="pt-2 text-sm leading-3">Size: {size}</p>
          <p className="py-4 text-sm leading-3 ">Flavor: {flavor}</p>
          <div className="flex items-center justify-between pt-4">
            <div className="flex">
              <div className="flex items-center mr-5">
                <AiOutlineHeart className="text-xl" />
                收藏
              </div>
              <div className="flex items-center"  onClick={removeItem}>
                <AiOutlineDelete className="text-xl" />
                刪除
              </div>
            </div>
            <p className="text-base font-black ">${price}{" "}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
