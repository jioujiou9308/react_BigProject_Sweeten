import React from "react";

const ProductPagination = () => {
  return (
    <div>
      <ul className="flex justify-center">
        <li className="px-3 py-2 mx-1 text-gray-500 bg-gray-200 rounded-lg">
          <a className="flex items-center font-bold" href="#">
            <span className="mx-1">previous</span>
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover: ">
          <a className="font-bold" href="#">
            1
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover: ">
          <a className="font-bold" href="#">
            2
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover: ">
          <a className="font-bold" href="#">
            3
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover: ">
          <a className="flex items-center font-bold" href="#">
            <span className="mx-1">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProductPagination;
