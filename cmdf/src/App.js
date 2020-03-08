import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

import Register from "./pages/register";
import Login from "./pages/login";

import { UserSession } from "blockstack";
import { appConfig } from "./assets/constants";

import "./App.css";

const userSession = new UserSession({ appConfig });

class App extends React.Component {
  handleSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();
  }

  handleSignOut(e) {
    e.preventDefault();
    userSession.signUserOut(window.location.origin);
  }

  componentWillMount() {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(userData => {
        if (!userData.username) {
          throw new Error("This app requires a username.");
        } else {
          console.warn(userData.username);
        }
        window.location = window.location.origin;
      });
    }
  }

  render() {
    return (
      <>
        <CssBaseline />
        <Switch>
          <Route
            path="/login"
            exact
            render={props => (
              <Login {...props} handleSignIn={this.handleSignIn} />
            )}
          />
          <Route path="/register" exact component={Register} />
          <Route
            path="/"
            exact
            render={props => (
              <Main {...props} handleSignOut={this.handleSignOut} />
            )}
          />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
