import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./components/main/main";
import MainAppBar from "./components/mainappbar/mainappbar";
import Footer from "./components/footer/footer";

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
