import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/user-context";

const Home = () => {
  const { user } = useContext(UserContext);

  const content = JSON.stringify(user);
  const token = localStorage.getItem("token");

  // useEffect(() => {
  //   UserService.getAccessor().then(
  //     (response) => {
  //       //setContent(response.data);
  //     },
  //     (error) => {
  //       const errorContent =
  //         (error.response && error.response.data) ||
  //         error.message ||
  //         error.toString();

  //       //send errorContent to an error display component when this happens
  //       setContent(errorContent);
  //     }
  //   );
  // }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h1>Welcome</h1>
      </header>
    </div>
  );
};

export default Home;