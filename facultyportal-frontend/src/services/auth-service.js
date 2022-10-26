import axios from "axios";

const API_BASE_URL = "https://localhost:7078/api";

const signIn = async (email, password) => {
  try {
    const response = await axios.post(API_BASE_URL + "/Accounts" + "/sign-in", {
      email,
      password,
    });
    localStorage.setItem("token", JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const signOut = () => {
  localStorage.removeItem("token");
  console.log("signed out!");
};

export { signIn, signOut };
