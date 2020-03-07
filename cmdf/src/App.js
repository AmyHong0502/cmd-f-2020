import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./components/main/Main";
import MainAppBar from "./components/navigation/AppBar";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <MainAppBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
