import React from "react";

const Pagination = () => {
  return (
    <div>
      <ul className="flex justify-center">
        <li className="px-3 py-2 mx-1 text-gray-500 bg-gray-200 rounded-lg">
          <a className="flex items-center font-bold" href="#1">
            <span className="mx-1">previous</span>
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-gray-200">
          <a className="font-bold" href="#1">
            1
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-gray-200">
          <a className="font-bold" href="#1">
            2
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-gray-200">
          <a className="font-bold" href="#1">
            3
          </a>
        </li>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover:text-gray-200">
          <a className="flex items-center font-bold" href="#1">
            <span className="mx-1">Next</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
