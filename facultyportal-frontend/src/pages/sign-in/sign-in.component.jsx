import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user-context";
import Loading from "../../components/loading/loading.component";
import { ReactComponent as FPLogo } from "../../assets/books-stack-of-three-svgrepo-com.svg";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/auth-service";

import "./sign-in.styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = await signIn(email, password);
    setUser(user);
    setSuccess(true);
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="sign-in-wrapper">
      <form className="" onSubmit={handleSignIn}>
        <div className="sign-in-header">
          <FPLogo className="sign-in-logo" />
          <h1 className="sign-in-title">Faculty Portal</h1>
        </div>
        <h1>Sign In</h1>
        <div className="username">
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            autoComplete="off"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </div>
        <div className="password">
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChangePassword}
            required
          />
        </div>
        <div className="remember-me">
          <input type="checkbox"></input>
          <label>Remember me?</label>
        </div>
        <div className="sign-in-btn">
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
