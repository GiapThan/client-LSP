import axiosClient from "./axiosClient";

const userLogin = async ({ email, password }) => {
  let res;
  try {
    res = await axiosClient.post(
      "user/login",
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );
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
    let res = await axiosClient.post(
      "user/signup",
      {
        userName,
        email,
        password,
      },
      { withCredentials: true }
    );
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
