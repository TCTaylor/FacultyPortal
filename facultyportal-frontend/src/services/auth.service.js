import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

const signIn = async (email, password) => {
  const response = await axios
    .post(API_BASE_URL + "/Accounts" + "/sign-in", {email, password});
  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data));
    console.log(response.data);
  }
  return response.data;
};

const signOut = () => {
  localStorage.removeItem("token");
};

export {
  signIn,
  signOut,
};
