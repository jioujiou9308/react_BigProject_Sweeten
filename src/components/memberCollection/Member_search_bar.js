import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input,Button } from "@material-tailwind/react";


function Member_search_bar() {
  return (
    <>
      <div className="px-3">
        <Input
          color="pink"
          label="你可以透過訂單編號、商品名稱搜索"
          icon={<AiOutlineSearch className="mr-4 icon" />}
        />
      </div>
    </>
  );
}

export default Member_search_bar;
