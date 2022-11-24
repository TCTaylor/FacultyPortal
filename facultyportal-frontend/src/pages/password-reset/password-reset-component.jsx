import React, { useEffect, useState } from "react";
import axios from "axios";

import Loading from "../../components/loading/loading.component";

const API_BASE_URL = "https://localhost:7078/api";

function PasswordReset() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  // Post username (& other id info) to confirm user
  // Return new complex generated password
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // axios
    //   .post(API_BASE_URL + "/Accessors", userName)
    //   .then((response) => {
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //   });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-sm-3 mt-4">
            <label>Username</label>
            <input type="text" className="form-control"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PasswordReset;
