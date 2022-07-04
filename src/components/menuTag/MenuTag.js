import React from "react";
import { useState } from "react";
import Tag from "./Tag";

const titleList = ["蛋糕", "餅乾", "點心", "冰品"];

const MenuTag = () => {
  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full">
      {titleList.map((title, i) => (
        <Tag key={title} title={title} i={i} />
      ))}
    </div>
  );
};

export default MenuTag;
