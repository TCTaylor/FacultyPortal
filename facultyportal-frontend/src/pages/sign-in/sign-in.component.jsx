import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user-context";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/auth-service";

import FPLogo from "../../assets/books-stack-of-three-svgrepo-com.svg";
import SignInImg from "../../assets/CHCBuildings-2_0.webp";
import "./sign-in.styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

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
    if (user) {
      setUser(user);
      setSuccess(true);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

  return (
    <div className="container py-5">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col col-xl-30">
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src={SignInImg} alt="Sign in form" className="img-fluid" />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">
                <form onSubmit={handleSignIn}>
                  <div className="d-flex align-items-center mb-3 pb-1">
                    <img src={FPLogo} className="sign-in-logo" />
                    <span className="h1 fw-bold mb-0">Faculty Portal</span>
                  </div>
                  <h5 className="fw-normal mb-3 pb-3">
                    Sign into your account
                  </h5>
                  {error && (
                    <div
                      className=" error-message alert alert-danger"
                      role="alert"
                    >
                      <i className="bi bi-exclamation-square-fill"> </i>
                      Invalid email or password
                    </div>
                  )}
                  <div className="username">
                    <label>Email</label>
                    <br />
                    <input
                      type="email"
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
                  <div className="form-check d-flex mb-4">
                    <input className="form-check-input me-2" type="checkbox" />
                    <label className="form-check-label">
                      Remember password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg" type="submit">
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                        ></span>
                      )}
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
