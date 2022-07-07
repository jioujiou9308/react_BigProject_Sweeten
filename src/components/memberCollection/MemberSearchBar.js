import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Input, Button } from "@material-tailwind/react";

function MemberSearchBar(props) {
  const { searchWord, setSearchWord }=props
  return (
    <>
      <div className="px-3">
        <Input
          className="text-dark"
          color="deep-orange"
          value={searchWord}
          onChange={(e) => {
            setSearchWord(e.target.value);
            // console.log(e.target.value);
          }}
          label="你可以透過商品名稱或編號搜索"
          icon={<AiOutlineSearch className="mr-4 cursor-pointer icon" />}
        />
      </div>
    </>
  );
}

export default MemberSearchBar;
