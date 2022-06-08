import "./App.css";
import Home from "./page/Home";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="relative min-h-screen App bg-test text-dark">
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
