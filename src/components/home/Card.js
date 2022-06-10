import React from "react";

const Card = (props) => {
  const { card } = props;
//   console.log(process.env.PUBLIC_URL + "/logo.png");
  return (
    <div className="flex flex-col justify-between pb-14 md:px-5 md:pb-0 text-center">
      {/* mobile h1 */}
      <h1 className="text-xl font-normal mb-4 md:hidden pb-1 underline decoration-secondary underline-offset-8">
        {card.title}
      </h1>
      <div className="w-full h-auto m-auto">
        <img
          className="object-cover"
          src={process.env.PUBLIC_URL + "/images/home/section3/hp-express.png"}
          alt="..."
        />
      </div>
      {/* desktop */}
      <div className="my-2 hidden md:block">
        <h1 className="text-lg font-normal mt-5 mb-2">{card.title}</h1>
        <p className="mt-0 mb-6">{card.context}</p>
        <button className="btn-home whitespace-nowrap">{card.btnText}</button>
      </div>
    </div>
  );
};

export default Card;

// <div className=" pb-14 md:px-5 md:pb-0 text-center">

//   <h1 className="text-xl font-normal mb-4 md:hidden pb-1 underline decoration-secondary underline-offset-8">
//     宅配專區
//   </h1>
//   <div className="w-full h-auto m-auto">
//     <img
//       className="object-cover"
//       src={require("../images/hp-express.png")}
//       alt="..."
//     />
//   </div>

//   <div className="my-2 hidden md:block">
//     <h1 className="text-lg font-normal mt-5 mb-2">宅配專區</h1>
//     <p className="mt-0 mb-6">可全台宅配商品</p>
//     <button className="btn-home whitespace-nowrap">
//       前往宅配商品 ＞
//     </button>
//   </div>
// </div>

// <div className=" pb-14 md:px-5 md:pb-0 text-center">

//   <h1 className="text-xl font-normal mb-4 md:hidden pb-1 underline decoration-secondary underline-offset-8">
//     課程預約
//   </h1>
//   <div className="w-full h-auto m-auto">
//     <img
//       className="object-cover"
//       src={require("../images/hp-class.png")}
//       alt="..."
//     />
//   </div>

//   <div className="my-2 hidden md:block">
//     <h1 className="text-lg font-normal mt-5 mb-2">課程預約</h1>
//     <p className="mt-0 mb-6">不容錯過的優質師資與精彩課程</p>
//     <button className="btn-home whitespace-nowrap">
//       前往查看課程 ＞
//     </button>
//   </div>
// </div>

// <div className="md:px-5 md:pb-0 text-center">

//   <h1 className="text-xl font-normal mb-4 md:hidden pb-1 underline decoration-secondary underline-offset-8">
//     訂購流程
//   </h1>
//   <div className="w-full h-auto m-auto">
//     <img
//       className="object-cover"
//       src={require("../images/hp-order.png")}
//       alt="..."
//     />
//   </div>

//   <div className="my-2 hidden md:block">
//     <h1 className="text-lg font-normal mt-5 mb-2">訂購流程</h1>
//     <p className="mt-0 mb-6">我們不得不面對一</p>
//     <button className="btn-home whitespace-nowrap">
//       前往訂購須知 ＞
//     </button>
//   </div>
// </div>
// </div>
