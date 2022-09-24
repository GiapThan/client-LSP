import axiosClient from "../api/axiosClient";

const userLogin = async ({ email, password }) => {
  console.log(email, password);
  let res;
  try {
    res = await axiosClient.post("user/login", {
      email,
      password,
    });
    if (res && res.errCode === 0) {
      return {
        email,
        userName: res.data.userName,
        type: res.data.type,
        accessToken: res.accessToken,
        roleId: res.data.roleId,
      };
    }
    return {};
  } catch (error) {
    console.log(error);
  }
};

const userSignUp = async ({ userName, email, password }) => {
  try {
    let res = await axiosClient.post("user/signup", {
      userName,
      email,
      password,
    });
    if (res && res.errCode === 0) {
      return {
        email,
        userName: res.data.userName,
        type: res.data.type,
        accessToken: res.accessToken,
        roleId: res.data.roleId,
      };
    }
    return {};
  } catch (err) {
    console.log(err);
  }
};

export default {
  userLogin,
  userSignUp,
};
