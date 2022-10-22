import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {signIn, signOut } from "../../services/auth.service";
// https://www.bezkoder.com/react-hooks-redux-login-registration-example/
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

function SignIn({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUserName(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = await signIn({
      username,
      password,
    });
    setToken(token);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSignIn}>
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChangeUsername}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <div>
            <button type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

SignIn.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default SignIn;
