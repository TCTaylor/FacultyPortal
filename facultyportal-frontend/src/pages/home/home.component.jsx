import React, { useState, useEffect } from "react";

import UserService from "../../user.service";

const Home = () => {
  const [content, setContent] = useState("");

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
        <h3>Welcome</h3>
      </header>
    </div>
  );
};

export default Home;