import React from "react";
import { useState, useEffect } from "react";
import Tag from "./Tag";
import axios from 'axios'
import { API_URL } from "../../utils/config";

// const titleList = ["蛋糕", "餅乾", "點心", "冰品"];

const MenuTag = () => {
  const [allCategory,setAllCategory ]=useState([])
  const categoryTag = allCategory?.filter((item)=>String(item.id)[0]==1)
  //NOTE categoryTag是空陣列
  console.log('categorytag', categoryTag);
  useEffect(()=>{
    axios.get(API_URL+'/product/category').then(({data})=>{
      setAllCategory(data)
      console.log('categorytag',data)
    }).catch((e) => console.log(e));
  },[])
  return (
    <div className="absolute top-0 flex overflow-hidden -translate-y-full">
      {categoryTag.map((title, i) => (
        <Tag key={title} title={title.name} i={i} id={title.id}/>
      ))}
    </div>
  );
};

export default MenuTag;
