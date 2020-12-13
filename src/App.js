import "./App.css";

import Navbar from "./components/Navbar";
import Layout from "./components/Higher-Order-Components/Layout";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="m-1 p-1">
        <Navbar />
        <Layout />
        <Footer />
      </div>
    </>
  );
}

export default App;
