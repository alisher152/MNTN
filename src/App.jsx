import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Description from "./components/Description.jsx";
import Footer from "./components/Footer.jsx";
import { linearGradient } from "framer-motion/client";

function App() {
  return (
    <div
      className="absolute inset-0 bg-cover bg-center z-1"
      style={{
        backgroundImage:
          "linear-gradient(180deg, rgba(11, 29, 38, 0.00) 0%, rgba(11, 29, 38, 0.7) 75.38%, #0B1D26 100%), url('/images/2560x1600_1421084_[www.ArtFile.ru].jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Navbar />
      <Hero />
      <Description />
      <Footer />
    </div>
  );
}

export default App;
