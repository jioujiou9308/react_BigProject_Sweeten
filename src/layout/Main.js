import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../page/About";
// import Course from "../page/Course";
import Course from "../page/Course_ex";
import CourseDetail from "../page/CourseDetail";
import Member from "../page/Member";
import MemberColloction from "../page/MemberCollection";
import MemberInformation from "../page/MemberInformation";
import MemberOrder from "../page/MemberOrder";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import Test from "../page/Test";
import Cart from "../page/Cart";
import Login from "../components/Login";
import CustomerService from "../page/CustomerService";
import CheckOut from "../page/CheckOut";
import ExpireProduct from "../page/ExpireProduct";

const Main = () => {
  return (
    <main className="flex flex-wrap justify-center pb-12 mx-auto pt-36 ">
      {/* <Aside /> */}
      <div className="relative w-full p-8 bg-white shadow max-w-7xl ">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/member" element={<Member />} />
          <Route path="/member/order" element={<MemberOrder />} />
          <Route path="/member/collection" element={<MemberColloction />} />
          <Route path="/member/information" element={<MemberInformation />} />
          {/* <Route path="/course" element={<Course />} /> */}
          <Route path="/course" element={<Course />} />

          <Route path="/course/detail" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/customerService" element={<CustomerService />} />
          <Route path="/expireProduct" element={<ExpireProduct />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
