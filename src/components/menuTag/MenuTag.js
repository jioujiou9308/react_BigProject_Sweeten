import React from "react";
import Tag from "./Tag";

const MenuTag = ({ categoryTag }) => {
  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full cursor-pointer">
      {categoryTag?.map((title, i) => (
        <Tag key={title} title={title.name} i={i} id={title.id} />
      ))}
    </div>
  );
};

export default MenuTag;
