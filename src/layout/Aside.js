import React from "react";
import { IoReturnUpBack, IoCaretUp } from "react-icons/io5";
import { Button } from "@material-tailwind/react";

const list = ["甜品", "蛋糕", "冰品", "禮盒"];

const Aside = () => {
  return (
    <div>
      <aside className="hidden max-w-xs mr-10 md:block bg-aside">
        <h3 className="flex items-center w-full px-8 py-2 font-bold text-white h4 bg-sub">
          <IoReturnUpBack className="mr-1" />
          回到上一頁
        </h3>
        <ul className="pt-2 min-h-[28rem] text-justify">
          <li className="py-2 px-9 ">
            <h4 className="flex items-center font-bold h4">
              商品類型 <IoCaretUp className="ml-1" />
            </h4>
          </li>
          {list.map((title) => (
            <li key={title}>
              <Button
                className="w-full py-0 text-left rounded-none text-dark px-9"
                variant="text"
                size="sm"
              >
                <a href="#1" className="p">
                  {title}
                </a>
              </Button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Aside;
