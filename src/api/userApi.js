import axiosClient from "./axiosClient";

const userLogin = async ({ email, password }) => {
  let res;
  try {
    res = await axiosClient.post("user/login", {
      email,
      password,
    });
    if (res && res.errCode === 0) {
      return res.data;
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
      return res.data;
    }
    if (res.errCode === -100) {
      return { errCode: -100 };
    }
    return {};
  } catch (err) {
    console.log(err);
    return { errCode: -100 };
  }
};

const RefreshToken = async () => {
  try {
    let response = await axiosClient.get("user/refresh-token");
    if (response.errCode === 0) {
      return response.data;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const userLogOut = async () => {
  try {
    let response = await axiosClient.get("user/logout");
    if (response.errCode === 0) return true;
    else return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

const userApi = {
  userLogin,
  userSignUp,
  RefreshToken,
  userLogOut,
};

export default userApi;
