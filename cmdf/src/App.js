import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Main from "./components/main/Main";
import Login from "./pages/login";

import { UserSession } from "blockstack";
import { appConfig } from "./assets/constants";

import "./App.css";

const userSession = new UserSession({ appConfig });

function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userSession.isUserSignedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

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
              <Login
                {...props}
                userSession={userSession}
                handleSignIn={this.handleSignIn}
              />
            )}
          />
          <ProtectedRoute path="/" exact>
            <Main
              userSession={userSession}
              handleSignOut={this.handleSignOut}
            />
          </ProtectedRoute>
        </Switch>
      </>
    );
  }
}

export default App;
