import "./App.css";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
