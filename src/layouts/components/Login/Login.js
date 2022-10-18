import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import { useDispatch } from "react-redux";

import { setUserInfor } from "../../../redux/userSlice";
import { CloseModal } from "../../../redux/systemSlice";

import styles from "./Login.module.scss";
import userApi from "../../../api/userApi";
import Loading from "../../../component/Loading/Loading";

const cx = classNames.bind(styles);

function Login({ onChangeTypeModal }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
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
    if (!email) {
      return setError("Chưa nhập email");
    }
    if (email.indexOf("@") === -1) {
      return setError("Định dạng email chưa đúng");
    }
    if (!password) {
      return setError("Mật khẩu không được bỏ trống");
    }

    setIsLoading(true);
    try {
      let res = await userApi.userLogin({
        email,
        password,
      });

      if (res && res.email) {
        let action = setUserInfor({ ...res, isLogin: true });
        setEmail("");
        setPassword("");
        setIsLoading(false);
        dispatch(action);
        dispatch(CloseModal());
      } else {
        setError("Đăng nhập thất bại. Hãy thử lại");
        setIsLoading(false);
        return;
      }
    } catch (error) {
      setError("Đã có lỗi xảy ra, vui lòng thử lại");
      setIsLoading(false);
    }
  };

  return (
    <div className={cx("form-input")}>
      <div className={cx("title")}>Đăng Nhập</div>
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
          placeholder="Mật Khẩu"
          autoComplete="on"
          type={isShowPassword ? "text" : "password"}
          value={password}
          onClick={() => setError("")}
          onChange={(e) => setPassword(e.target.value)}
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
        {isLoading && <Loading />}
        Đăng Nhập
      </button>
      <div className={cx("option")}>
        <span>Quên mật khẩu</span>
        <span
          onClick={() => {
            onChangeTypeModal("SIGNUP_MODAL");
          }}
        >
          Chưa có tài khoản
        </span>
      </div>
    </div>
  );
}

export default Login;
