import React, { useEffect, useState } from "react";
import MemberTag from "./MemberTag";

const MemberMenuTag = () => {
  const [path, setPath] = useState(true);
  const [allCategory, setAllCategory] = useState([]);

  function getPath() {
    const pathName = () => window.location.href;
    return pathName().includes("member") ? setPath(true) : setPath(false);
  }

  const categoryTag = allCategory?.filter((item) => String(item.id)[0] == 1);
  //NOTE categoryTag是空陣列
  console.log("categorytag", categoryTag);

  useEffect(() => {
    getPath();
    if (path) {
      const memberTagList = [
        { id: 1000, name: "會員檔案" },
        { id: 1001, name: "訂單查詢" },
        { id: 1002, name: "蒐藏清單" },
      ];
      setAllCategory(memberTagList);
      // console.log(memberTagList);
    }
  }, [path]);

  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full cursor-pointer">
      {categoryTag?.map((title, i) => (
        <MemberTag key={title} title={title.name} i={i} id={title.id} />
      ))}
    </div>
  );
};

export default MemberMenuTag;
