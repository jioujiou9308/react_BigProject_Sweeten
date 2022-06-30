import "./App.css";
import Home from "./page/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LoginModal from "./components/dialog/LoginModal";
import SignupModal from "./components/dialog/SignupModal";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import "animate.css";

// TODO 註冊 關於 上下架 訂單 課程 即期品

function App() {
  const dispatch = useDispatch();
  // firebase 登入狀態聆聽

  //AOS初始化
  useEffect(() => {
    AOS.init();
    AOS.refresh();
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
    </div>
  );
}

export default App;
