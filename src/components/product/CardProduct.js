import { React, useEffect, useState } from "react";
import OneCardProduct from "./OneCardProduct";
import { useProductState } from "../../utils/redux/hooks-redux";
import Pagination from "./Pagination";
const initPageInfo = {
  cur: 1,
  per: 12,
  total: 1,
};

const CardProduct = () => {
  const [products, setProducts] = useProductState();
  const [pageInfo, setPageInfo] = useState(initPageInfo);
  const [index, setInex] = useState({ start: 0, end: pageInfo.per });

  const changePage = (n) => setPageInfo({ ...pageInfo, cur: n });
  // 製作頁碼
  const getPage = () => {
    let page = [];
    for (let i = 1; i <= pageInfo.total; i++) {
      page.push(
        <Pagination i={i} currentPage={pageInfo} setCurrentPage={changePage} />
      );
    }
    return page;
  };

  // products 改變 就更新 pageInfo
  useEffect(() => {
    const newTotal = parseInt(products.length / pageInfo.per) + 1;
    setPageInfo({ ...pageInfo, total: newTotal, cur: 1 });
  }, [products]);

  // pageInfo 改變 就從新計算分頁 index
  useEffect(() => {
    const { cur, per } = pageInfo;
    setInex({ start: (cur - 1) * per, end: cur * per });
  }, [pageInfo]);

  return (
    <>
      <section className="bg-white">
        <div className="flex items-center justify-between text-sm tracking-widest uppercase md:px-3">
          <h3 className="w-full p-1 border-b-2 border-line p">精選商品</h3>
        </div>
        <div className="container px-6 py-8 mx-auto">
          {/* ---------------------------- */}
          <div className="flex flex-wrap justify-around">
            {products?.slice(index.start, index.end).map((product) => (
              <OneCardProduct product={product} />
            ))}
          </div>

          <ul className="flex items-center justify-center">
            <li
              className="mr-4"
              // onClick={() => {
              //   currentPage > 1 && setCurrentPage(currentPage - 1);
              // }}
            >
              上一頁
            </li>
            {getPage()}
            <li
              className="ml-4"
              onClick={() => {
                // currentPage < totalPage && setCurrentPage(currentPage + 1);
              }}
            >
              下一頁
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CardProduct;
