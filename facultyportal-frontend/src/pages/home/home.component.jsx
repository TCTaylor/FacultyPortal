import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/user-context";
import useAuth from "../../hooks/use-auth";

const Home = () => {
  // const { user } = useContext(UserContext);

  const { userName } = useAuth();

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
    <div className="container mt-4">
      <h1>Welcome, {userName}</h1>
    </div>
  );
};

export default Home;
