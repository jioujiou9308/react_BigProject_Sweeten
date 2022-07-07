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
        <Pagination i={i} pageInfo={pageInfo} setPageInfo={setPageInfo} />
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

        
              {/* 桌機分頁 */}
          <ul className="flex flex-wrap items-center justify-center">
            <li
              className="hidden mr-4 cursor-pointer md:block"
              onClick={() => {
                const { cur } = pageInfo;
                cur > 1 && setPageInfo({ ...pageInfo, cur: cur - 1 });
              }}
            >
              上一頁
            </li>
            {getPage()}
             {/* 桌機分頁 */}
            <li
              className="hidden ml-4 cursor-pointer md:block"
              onClick={() => {
                const { cur, total } = pageInfo;
                cur < total && setPageInfo({ ...pageInfo, cur: cur + 1 });
              }}
            >
              下一頁
            </li>
          </ul>

          {/* 手機板分頁 */}
          <ul  className="mt-4 text-center md:hidden p">
            <li className="mr-4 cursor-pointer" >
              頁數
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default CardProduct;
