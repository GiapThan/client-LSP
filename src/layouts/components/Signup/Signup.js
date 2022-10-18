import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

import Loading from "../../../component/Loading/Loading";
import { setUserInfor } from "../../../redux/userSlice";
import { CloseModal } from "../../../redux/systemSlice";
import styles from "../Login/Login.module.scss";
import userApi from "../../../api/userApi";

const cx = classNames.bind(styles);

function Signup({ onChangeTypeModal }) {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const RefreshToken = async () => {
      try {
        let data = await userApi.RefreshToken();
        if (data) {
          dispatch(setUserInfor({ ...data, isLogin: true }));
          dispatch(CloseModal());
        }
      } catch (error) {}
    };
    RefreshToken();
  }, [dispatch]);

  const handleSubmit = async () => {
    if (!userName) return setError("Chưa nhập họ và tên");
    if (!email) return setError("Chưa nhập email");
    if (email.indexOf("@") === -1) return setError("Định dạng email chưa đúng");
    if (!password) return setError("Mật khẩu không được bỏ trống");
    if (password !== rePassword) return setError("Mật khẩu không trùng khớp");

    setIsLoading(true);
    try {
      let response = await userApi.userSignUp({ userName, email, password });
      if (response && response.email) {
        setUserName("");
        setEmail("");
        setPassword("");
        setRePassword("");
        setIsLoading(false);
        dispatch(setUserInfor({ ...response, isLogin: true }));
        dispatch(CloseModal());
      } else if (response.errCode === -100) {
        setError("Đã có lỗi xảy ra, vui lòng thử lại");
        setIsLoading(false);
      } else {
        setError("Email đã tồn tại");
        setIsLoading(false);
        return;
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={cx("form-input")}>
      <div className={cx("title")}>Đăng Ký</div>
      <div className={cx("form-control")}>
        <FontAwesomeIcon className={cx("befor-icon")} icon={faUser} />
        <input
          placeholder="Họ và tên"
          autoComplete="on"
          type="text"
          value={userName}
          onClick={() => setError("")}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className={cx("form-control")}>
        <FontAwesomeIcon className={cx("befor-icon")} icon={faEnvelope} />
        <input
          placeholder="Email"
          autoComplete="on"
          type="email"
          value={email}
          onClick={() => setError("")}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={cx("form-control")}>
        <FontAwesomeIcon className={cx("befor-icon")} icon={faLock} />
        <input
          placeholder="Mật khẩu"
          autoComplete="on"
          type={isShowPassword ? "text" : "password"}
          value={password}
          onClick={() => setError("")}
          onChange={(e) => setPassword(e.target.value)}
        />
        <FontAwesomeIcon
          className={cx("show-password")}
          onClick={() => setIsShowPassword(!isShowPassword)}
          icon={isShowPassword ? faEye : faEyeSlash}
        />
      </div>
      <div className={cx("form-control")}>
        <FontAwesomeIcon className={cx("befor-icon")} icon={faLock} />
        <input
          placeholder="Nhập lại mật khẩu"
          autoComplete="on"
          type={isShowPassword ? "text" : "password"}
          value={rePassword}
          onClick={() => setError("")}
          onChange={(e) => setRePassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit();
          }}
        />
        <FontAwesomeIcon
          className={cx("show-password")}
          onClick={() => setIsShowPassword(!isShowPassword)}
          icon={isShowPassword ? faEye : faEyeSlash}
        />
      </div>
      <div className={cx("show-error")}>{error}</div>
      <button className={cx("submit-btn")} onClick={handleSubmit}>
        {isLoading ? <Loading /> : null}
        Đăng Ký
      </button>
      <div className={cx("option")}>
        <span>Quên mật khẩu</span>
        <span
          onClick={() => {
            onChangeTypeModal("LOGIN_MODAL");
          }}
        >
          Đã có tài khoản
        </span>
      </div>
    </div>
  );
}

export default Signup;
