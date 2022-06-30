import React from "react";

const Pagination = (props) => {
  const {i, page, setPage}=props
  return (
    <div >
      
        <li className={`${page==i?'bg-secondary text-white':''} px-3 py-2 mx-1 text-gray-500 bg-gray-200 rounded-lg`} onClick={()=>{
          setPage(i)
        }}>
          <a className="flex items-center font-bold" href="#">
            <span className="mx-1">{i}</span>
          </a>
        </li>
       
      
    </div>
  );
};

export default Pagination;
