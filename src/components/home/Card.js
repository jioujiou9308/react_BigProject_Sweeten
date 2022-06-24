import React from "react";

const Card = (props) => {
  const { card } = props;
  //   console.log(process.env.PUBLIC_URL + "/logo.png");
  return (
    <div className="flex flex-col justify-between text-center pb-14 md:px-5 md:pb-0">
      {/* mobile h1 */}
      <h1 className="pb-1 mb-4 text-xl font-normal underline md:hidden decoration-secondary underline-offset-8">
        {card.title}
      </h1>
      <div className="w-full h-auto m-auto">
        <img
          className="object-cover"
          src={process.env.PUBLIC_URL + "/images/home/section01_cake1.png"}
          alt="..."
        />
      </div>
      {/* desktop */}
      <div className="hidden my-2 md:block">
        <h1 className="mt-5 mb-2 text-lg font-normal">{card.title}</h1>
        <p className="mt-0 mb-6">{card.context}</p>
        <button className="btn-home whitespace-nowrap">{card.btnText}</button>
      </div>
    </div>
  );
};

export default Card;

// <div className="text-center pb-14 md:px-5 md:pb-0">

//   <h1 className="pb-1 mb-4 text-xl font-normal underline md:hidden decoration-secondary underline-offset-8">
//     宅配專區
//   </h1>
//   <div className="w-full h-auto m-auto">
//     <img
//       className="object-cover"
//       src={require("../images/hp-express.png")}
//       alt="..."
//     />
//   </div>

//   <div className="hidden my-2 md:block">
//     <h1 className="mt-5 mb-2 text-lg font-normal">宅配專區</h1>
//     <p className="mt-0 mb-6">可全台宅配商品</p>
//     <button className="btn-home whitespace-nowrap">
//       前往宅配商品 ＞
//     </button>
//   </div>
// </div>

// <div className="text-center pb-14 md:px-5 md:pb-0">

//   <h1 className="pb-1 mb-4 text-xl font-normal underline md:hidden decoration-secondary underline-offset-8">
//     課程預約
//   </h1>
//   <div className="w-full h-auto m-auto">
//     <img
//       className="object-cover"
//       src={require("../images/hp-className.png")}
//       alt="..."
//     />
//   </div>

//   <div className="hidden my-2 md:block">
//     <h1 className="mt-5 mb-2 text-lg font-normal">課程預約</h1>
//     <p className="mt-0 mb-6">不容錯過的優質師資與精彩課程</p>
//     <button className="btn-home whitespace-nowrap">
//       前往查看課程 ＞
//     </button>
//   </div>
// </div>

// <div className="text-center md:px-5 md:pb-0">

//   <h1 className="pb-1 mb-4 text-xl font-normal underline md:hidden decoration-secondary underline-offset-8">
//     訂購流程
//   </h1>
//   <div className="w-full h-auto m-auto">
//     <img
//       className="object-cover"
//       src={require("../images/hp-order.png")}
//       alt="..."
//     />
//   </div>

//   <div className="hidden my-2 md:block">
//     <h1 className="mt-5 mb-2 text-lg font-normal">訂購流程</h1>
//     <p className="mt-0 mb-6">我們不得不面對一</p>
//     <button className="btn-home whitespace-nowrap">
//       前往訂購須知 ＞
//     </button>
//   </div>
// </div>
// </div>
