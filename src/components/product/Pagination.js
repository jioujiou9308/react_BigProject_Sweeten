import React from "react";

const Pagination = (props) => {
  const { i, currentPage, setCurrentPage } = props;
  return (
    <div>
      <li
        className={`${
          i == currentPage ? "bg-secondary text-white" : ""
        } px-3 py-2 mx-1 text-gray-500 bg-gray-200 rounded-lg`}
        onClick={() => {
          setCurrentPage(i)
        }}
      >
        <a className="flex items-center font-bold" href="#">
          <span className="mx-1">{i}</span>
        </a>
      </li>
    </div>
  );
};

export default Pagination;
