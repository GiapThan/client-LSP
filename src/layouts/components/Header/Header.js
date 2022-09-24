import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

import styles from "./Header.module.scss";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import logo from "../../../access/image/lo.jpg";
import Modal from "../../../component/Modal/Modal";

const LOGIN_MODAL = "LOGIN_MODAL";
const SIGNUP_MODAL = "SIGNUP_MODAL";

const cx = classNames.bind(styles);

function Header() {
  const UserInfor = useSelector((state) => state.user);

  const [isOpenModal, setIsOpenModal] = useState(null);

  const handleCloseModal = (type = null) => {
    setIsOpenModal(type);
  };

  return (
    <>
      <div className={cx("header")}>
        <div className={cx("logo")}>
          <Link to="/">
            <img className={cx("logo-item")} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={cx("login-signin")}>
          {!UserInfor.isLogin ? (
            <>
              <button
                onClick={() => setIsOpenModal(LOGIN_MODAL)}
                className={cx("login")}
              >
                <b>Đăng Nhập</b>
              </button>
              <button
                onClick={() => setIsOpenModal(SIGNUP_MODAL)}
                className={cx("signin")}
              >
                <b>Đăng Ký</b>
              </button>
            </>
          ) : (
            <>
              <div className={cx("avatar")}>
                <label>GT</label>
              </div>
            </>
          )}
        </div>
        <Modal
          containerId="Form-Login"
          isOpenModal={isOpenModal}
          onRequestClose={handleCloseModal}
        >
          {isOpenModal === LOGIN_MODAL ? (
            <Login onR={handleCloseModal} />
          ) : (
            <Signup onR={handleCloseModal} />
          )}
        </Modal>
      </div>
    </>
  );
}

export default Header;
