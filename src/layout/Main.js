import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../page/About";
// import Course from "../page/Course";
import Course from "../page/Course";
import CourseDetail from "../page/CourseDetail";
import Member from "../page/Member";
import MemberColloction from "../page/MemberCollection";
import MemberInformation from "../page/MemberInformation";
import MemberOrder from "../page/MemberOrder";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import Test from "../page/Test";
import Cart from "../page/Cart";
import Signup from "../components/dialog/Signup";
import CustomerService from "../page/CustomerService";
import CheckOut from "../page/CheckOut";
import ExpireProduct from "../page/ExpireProduct";
import ErrorPage from "../page/ErrorPage";
import FloatingBt from "../components/onlineHelp/FloatingBt"

const Main = () => {
  return (
    <main className="flex flex-wrap justify-center min-h-screen pb-12 mx-auto pt-36 ">
      {/* <Aside /> */}
      <div className="relative w-full p-6 bg-white shadow max-w-screen-2xl ">
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/member" element={<Member />} />
          <Route path="/member/order" element={<MemberOrder />} />
          <Route path="/member/collection" element={<MemberColloction />} />
          <Route path="/member/information" element={<MemberInformation />} />
          {/* <Route path="/course" element={<Course />} /> */}
          <Route path="/course" element={<Course />} />
          <Route path="/courseDetail" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/customerService" element={<CustomerService />} />
          <Route path="/expireProduct" element={<ExpireProduct />} />
        </Routes>
      </div>
      <FloatingBt/>
    </main>
  );
};

export default Main;