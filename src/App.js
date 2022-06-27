import "./App.css";
import Home from "./page/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LoginModal from "./components/dialog/LoginModal";

// TODO 註冊 關於 上下架 訂單 課程 即期品

function App() {
  //AOS初始化
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f6f6f6] App text-dark">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <LoginModal />
    </div>
  );
}

export default App;
