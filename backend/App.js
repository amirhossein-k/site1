import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
