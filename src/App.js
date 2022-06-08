import "./App.css";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto ">
        <Aside />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
