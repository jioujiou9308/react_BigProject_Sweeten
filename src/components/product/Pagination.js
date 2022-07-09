import React from "react";

const Pagination = (props) => {
  const { i, pageInfo, setPageInfo } = props;
  return (
    <div>
      <li
        className={`${
          i == pageInfo.cur ? "bg-secondary text-white" : ""
        } px-3 py-2 mx-1 text-gray-500 cursor-pointer bg-gray-200 rounded-lg`}
        onClick={() => {
          setPageInfo({ ...pageInfo, cur: i });
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
