import React, { useEffect } from "react";
import "./App.css";
import LandingPage from "./Sections/Landing/LandingPage";
import FormStore from "./Stores/forms";

function App() {
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.width;
      // const height = window.height;
      if (width < 1021) {
        FormStore.setDevice(1);
      } else {
        FormStore.setDevice(0);
      }
    });
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
