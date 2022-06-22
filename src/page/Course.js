import React from "react";
import CardCourse from "../components/course/CardCourse";

//假資料
const courses = [
  {
    id: 1,
    name: "星空馬卡龍",
    img:process.env.PUBLIC_URL+"/images/course/hand.jpg",
    description: "在家就能做！挑戰法式甜點之最--馬卡龍，製作外酥內軟、口感不甜膩的馬卡龍 教你學習蛋白霜打法、拆解烘焙",
    price: 700,
    duration: 120,
  },
  {
    id: 2,
    name: "法式甜點",
    img:process.env.PUBLIC_URL+"/images/course/hand.jpg",
    description:
      "層次豐富、風味多變是法式甜點的精神，當你能隨心駕馭食材及製作手法，你專屬的創意甜點即將誕生！",
    price: 1500,
    duration: 200,
  },
  {
    id: 3,
    name: "在家做胖死我太太肉桂捲",
    img:process.env.PUBLIC_URL+"/images/course/hand.jpg",
    description:
      "其實要做出一個好吃的肉桂捲，真的不難！ 重點就在於掌握幾個關鍵秘訣， 就可以克服這一切的問題！",
    price: 800,
    duration: 250,
  },
  {
    id: 4,
    name: "純植物甜點烘焙",
    img:process.env.PUBLIC_URL+"/images/course/hand.jpg",
    description:
      "讓《GREEN BAKERY 綠帶純植物烘焙》主廚 Isabella 帶我們將大自然的美好揉進甜點中",
    price: 700,
    duration: 120,
  },
];

const Course = () => {
  return (
    <>
      {courses.map((course, i) => {
        const { id, name,img, description, price, duration } = course;
        return (
          <>
            <CardCourse id={id} name={name} img={img} description={description} price={price} duration={duration} index={i}
             />
            <div className="border-b-2 border-b-primary"></div>
          </>
        );
      })}
    </>
  );
};

export default Course;
