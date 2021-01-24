import React from "react";
import "./themes/App-styles/App.css";
import Navbar from "./components/navbar/navbar.component";
import About from "./components/about/about.component";
import Contact from "./components/contact/contact.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <div className="container" id="top">
        <div className="item1">
          <div id="img-1" alt="Photo by Blake Guidry on Unsplash" />
          <About />
        </div>
        <div className="item2">
          <div id="img-2" alt="Photo by Darli Donizete from Pexels" />
          <Contact />
        </div>
        <div className="item3">
          <Footer />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
