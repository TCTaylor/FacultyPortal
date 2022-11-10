import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

const signIn = async (email, password) => {
  try {
    const response = await axios.post(API_BASE_URL + "/Accounts" + "/sign-in", {
      email,
      password,
    });
    // console.log(response.data);    
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log('Error', error.message);
    }
  }
};

const signOut = () => {
  localStorage.removeItem("token");
  console.log("signed out!");
};

export { signIn, signOut };
