import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLock,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import styles from "./Login.module.scss";
import userServices from "../../../services/userServices";

const cx = classNames.bind(styles);
console.log(styles);
function Login({ onLoseModal }) {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState();
  const [closing, setClosing] = useState(false);

  /*   const handleSubmit = async (e) => {
    e.preventDefault();
    if (type) {
      //login
      let res = await userServices.userLogin({
        email,
        password,
      });
      console.log(res);
    } else {
      //sign
      let res = await userServices.userSignUp({
        userName,
        email,
        password,
        rePassword,
      });
      console.log(res);
    }
  }; */

  /*   const handleLoseModal = () => {
    setClosing(true);

    wrapperRef.current.addEventListener(
      "animationend",
      () => {
        setClosing(false);
        onLoseModal();
      },
      {
        once: true,
      }
    );
  }; */

  return (
    <div>
      <form className="form-input">
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          <input
            placeholder="Email"
            autoComplete="on"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <FontAwesomeIcon icon={faLock} />
          <input
            placeholder="Mật Khẩu"
            autoComplete="on"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button>Đăng Nhập</button>
      </form>
    </div>
  );

  {
    /* <div className={`login-wrapper`}>
      <div className="login-content">
        <div className="title">Đăng Nhập</div>

        <form className="form-input">
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <input
              placeholder="Email"
              autoComplete="on"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <FontAwesomeIcon icon={faLock} />
            <input
              placeholder="Mật Khẩu"
              autoComplete="on"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button>Đăng Nhập</button>
        </form>

        <div className="forget-password">
          <span>Quên mật khẩu?</span>
          <span>Chưa có tài khoản</span>
        </div>
      </div>
    </div> */
  }
}

export default Login;
