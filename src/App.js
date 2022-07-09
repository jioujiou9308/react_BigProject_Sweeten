import "./App.css";
import Home from "./page/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { toast } from "react-toastify";
import { useEffect } from "react";
import LoginModal from "./components/dialog/LoginModal";
import SignupModal from "./components/dialog/SignupModal";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import "animate.css";
import axios from "axios";
import { useUserState } from "./utils/redux/hooks-redux";
import { API_URL } from "./utils/config";
import { updateUser } from "./utils/redux/userSlice";
import "./styles.css";
import OrderDetailModal from "./components/dialog/OrderDetailModal";
import AddCommentModal from "./components/dialog/AddCommentModal";

// TODO 註冊 關於 上下架 訂單 課程 即期品

function App() {
  const dispatch = useDispatch();
  const [user] = useUserState();
  console.log(user);
  //AOS初始化
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  }, []);
  /* ------------------------------- auth check ------------------------------- */
  useEffect(() => {
    axios
      .get(API_URL + "/auth/check?test=123", {
        // 如果想要跨源讀寫 cookie
        withCredentials: true,
      })
      .then(({ data: { user } }) => {
        user && toast.success("成功登入!");

        dispatch(updateUser(user || { id: 0, name: "遊客", email: "遊客" }));
      });
  }, [dispatch]);

  return (
    <div
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#f6f6f6] App text-dark"
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        transition={Slide}
        limit={1}
      />
      <LoginModal />
      <SignupModal />
      <OrderDetailModal />
      <AddCommentModal />
    </div>
  );
}

export default App;
