import axiosClient from "../api/axiosClient";

const userLogin = async ({ email, password }) => {
  console.log(email, password);
  let res;
  try {
    res = await axiosClient.post("user/login", {
      email,
      password,
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

const userSignUp = async ({ userName, email, password, rePassword }) => {
  try {
    let res = axiosClient.post("user/signup", {
      userName,
      email,
      password,
      rePassword,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default {
  userLogin,
  userSignUp,
};
