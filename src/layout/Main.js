import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../page/About";
import Course from "../page/Course";
import CourseDetail from "../page/CourseDetail";
import Member from "../page/Member";
import MemberColloction from "../page/MemberCollection";
import MemberInformation2 from "../page/MemberInformation2";
import MemberInformation from "../page/MemberInformation";
import Signup2 from "../page/Signup2";
import MemberOrder from "../page/MemberOrder";
import Product from "../page/Product";
import ProductDetail from "../page/ProductDetail";
import Test from "../page/Test";
import Cart from "../page/Cart";
import Signup from "../page/Signup";
import Login from "../components/Login";
import CustomerService from "../page/CustomerService";
import CheckOut from "../page/CheckOut";

const Main = () => {
  return (
    <main className="flex flex-wrap justify-center pt-32 pb-12 mx-auto">
      {/* <Aside /> */}
      <div className="w-full max-w-5xl md:w-3/4">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/test" element={<Test />} />
          <Route path="/member" element={<Member />} />
          <Route path="/member/order" element={<MemberOrder />} />
          <Route path="/member/collection" element={<MemberColloction />} />
          <Route path="/member/information" element={<MemberInformation />} />
          <Route path="/member/information2" element={<MemberInformation2 />} />
          <Route path="/course" element={<Course />} />
          <Route path="/course/detail" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup2" element={<Signup2 />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="/customerService" element={<CustomerService />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
