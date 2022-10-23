import React, { useState, useContext } from "react";
import AuthContext from "../../auth-provider";
import axios from "axios";
// https://www.bezkoder.com/react-hooks-redux-login-registration-example/
// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
// https://www.youtube.com/watch?v=X3qyxo_UTR4&list=RDCMUCY38RvRIxYODO4penyxUwTg&index=2

const API_BASE_URL = "https://localhost:7078/api";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const { setAuth } = useContext(AuthContext);
  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        API_BASE_URL + "/Accounts" + "/sign-in",
        {
          email,
          password,
        }
      );
      //console.log(JSON.stringify(response?.data));
      const token = response?.data?.token;
      const role = response?.data?.roleId;
      //console.log("in signIn, token is: " + token);
      setAuth({ email, password, role, token });
      localStorage.setItem("token", JSON.stringify(response.data.token));
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
    setLoading(false);
    alert("You have signed in! Reload to go to home page.")
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSignIn}>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              autoComplete="off"
              value={email}
              onChange={onChangeEmail}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
              required
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

export default SignIn;
