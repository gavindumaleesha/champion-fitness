import React from "react";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Products from "./components/Products";
import Packages from "./components/Packages";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <About />
      <Services />
      <Packages />
      <Products />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
