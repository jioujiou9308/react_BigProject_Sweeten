import "./App.css";
import Home from "./page/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userOnChanged, auth } from "./utils/firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    userOnChanged((user) => {
      if (user) {
        // 用戶存在
        console.log(auth.currentUser);
        console.log("login");
      } else {
        // 用戶不存在
        console.log(auth.currentUser);
        console.log("logout");
      }
    });
  }, []);
  return (
    <div className="relative min-h-screen bg-white App text-dark">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main/*" element={<Main />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
