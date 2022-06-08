import "./App.css";
import Aside from "./layout/Aside";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";


function App() {
  return (
    <div className="relative min-h-screen App bg-test text-dark">
      <Header />
      <main className="container flex flex-wrap justify-around py-12 mx-auto">
        <Aside />
        <div className="w-full md:w-3/4 ">
          <Main />
          
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
