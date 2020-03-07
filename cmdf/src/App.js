import React from "react";
import "./App.css";

import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./components/main/main";
import MainAppBar from "./components/mainappbar/mainappbar";
import Footer from "./components/footer/footer";

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
