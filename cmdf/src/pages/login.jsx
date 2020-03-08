import React from "react";

class Login extends React.Component {
  render() {
    const { handleSignIn } = this.props;

    return (
      <div>
        Login
        <button onClick={ handleSignIn.bind(this) }>
          Sign in with Blockstack
        </button>
      </div>
    );
  }
}

export default Login;
