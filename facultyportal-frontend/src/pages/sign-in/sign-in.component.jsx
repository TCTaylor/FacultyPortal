import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../services/auth-service";

import SignInImg from "../../assets/photo-1568667256549-094345857637.jpg";
import FPLogo from "../../assets/books-stack-of-three-svgrepo-com.svg";
import "./sign-in.styles.css";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [success]);

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
      setSuccess(true);
    } else {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="sign-in-container">
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
                    <input type="checkbox" className="form-check-input me-2" />
                    <label className="form-check-label">
                      Remember password
                    </label>
                  </div>
                  <div className="pt-1 mb-4">
                    <button type="submit" className="btn btn-dark">
                      {loading && (
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                        ></span>
                      )}
                      Sign In
                    </button>
                  </div>
                  <Link to={"/pw-reset"}>Forgot your password?</Link>
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
