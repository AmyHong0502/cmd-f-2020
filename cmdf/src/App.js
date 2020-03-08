import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Navigation from "./components/navigation/navigation";
import Main from "./components/main/main";
import MainAppBar from "./components/mainappbar/mainappbar";
import Footer from "./components/footer/footer";

import Register from "./pages/register";
import Login from "./pages/login";

import "./App.css";

function App() {
  return (
    <>
      <CssBaseline />
      <Navigation />
      <MainAppBar />
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
