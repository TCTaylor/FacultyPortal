import React, { useContext, useEffect, useState } from "react";
import UserContext from "../../context/user-context";
import Loading from "../../components/loading/loading.component";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/auth-service";

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
    return <Loading />
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
