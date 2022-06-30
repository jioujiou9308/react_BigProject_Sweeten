import React from "react";

const Pagination = (props) => {
  const { lastPage, page, setPage } = props;

  //將後端的資料拿出來設計頁碼
  //lastPage = 總共有幾頁
  const getPage = () => {
    let pages = [];
    for (let i = 1; i <= lastPage; i++) {
      pages.push(
        <li
          //page是我們現在在第幾頁
          style={{
            display: "inline-block",
            margin: "2px",
            backgroundColor: page === i ? "#00d1b2" : "",
            borderColor: page === i ? "#00d1b2" : "#dbdbdb",
            color: page === i ? "#fff" : "#363636",
            borderWidth: "1px",
            width: "28px",
            height: "28px",
            borderRadius: "3px",
            textAlign: "center",
          }}
          key={i}
          //這裡的只是換了頁碼但是還沒有將資料庫的資料做連結
          onClick={() => {
            setPage(i);
          }}
        >
          {i}
        </li>
      );
    }
    return pages;
  };

  //   console.log(page);
  //上一頁的按鈕
  const preClick = () => {
    const preCurrent = page - 1 < 1 ? 1 : page - 1;
    setPage(preCurrent);
  };
  //下一頁的按鈕
  const nextClick = () => {
    const nextCurrent = page + 1 > lastPage ? lastPage : page + 1;
    setPage(nextCurrent);
  };
  //-----------------------------------------------------------
  return (
    <div>
      <ul className="flex justify-center">
        <li className="px-3 py-2 mx-1 text-gray-500 bg-gray-200 rounded-lg">
          <a className="flex items-center font-bold" href="#">
            <span className="mx-1" onClick={preClick}>
              previous
            </span>
          </a>
        </li>
        <ul>{getPage()}</ul>
        <li className="px-3 py-2 mx-1 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-700 hover: ">
          <a className="flex items-center font-bold" href="#">
            <span className="mx-1" onClick={nextClick}>
              Next
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
