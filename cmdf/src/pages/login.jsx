import React from "react";
import OfficialCardHeader from "../components/main/Card";

<<<<<<< HEAD
export default function Login() {
  return <div><OfficialCardHeader>Login</OfficialCardHeader></div>;
=======
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
>>>>>>> remotes/origin/master
}

export default Login;
