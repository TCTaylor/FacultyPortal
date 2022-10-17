import "./sign-in.css";
import axios from "axios";
import { useRef, useState, useEffect } from "react";

//https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications

const API_BASE_URL = "https://localhost:7078/api";

function SignIn() {
  const userRef = useRef();
  const errRef = useRef();

  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  function signIn() {
    axios
      .post(API_BASE_URL + "/SignIn", {
        userEmail: userEmail,
        password: password
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // Erase any error messages when the user changes userEmail or password
  useEffect(() => {
    setError("");
  }, [userEmail, password]);

  return (
    <div className="login-wrapper">
      <p
        ref={errRef}
        aria-live="assertive"
      >
        {error}
      </p>
      <h1>Sign In</h1>
      <form onSubmit={signIn}>
        <label>Email</label>
        <input
          type="text"
          id="useremail"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          required
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
