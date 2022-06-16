import "./App.css";
import Home from "./page/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userOnChanged, auth } from "./utils/auth/";
import { useEffect } from "react";
import Login from "./components/Login";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  //AOS初始化
    useEffect(() => {
      AOS.init();
      AOS.refresh();
    }, []);
    
  useEffect(() => {
    
    
    userOnChanged((user) => {
      if (user) {
        // 用戶存在
        console.log("login");
        console.log("user:", !!auth.currentUser);
      } else {
        // 用戶不存在
        console.log("logout");
        console.log("user:", !!auth.currentUser);
      }
    });
  });
  return (
    <div className="relative min-h-screen bg-white pt-36 App text-dark">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main/*" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
