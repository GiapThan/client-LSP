import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Header.scss";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import logo from "../../../access/image/logo.svg";
import Modal from "../../../component/Modal/Modal";

const LOGIN_MODAL = "LOGIN_MODAL";
const SIGNUP_MODAL = "SIGNUP_MODAL";

function Header() {
  const UserInfor = useSelector((state) => state.user);

  const [isOpenModal, setIsOpenModal] = useState(null);

  const handleCloseModal = (type = null) => {
    setIsOpenModal(type);
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="login-signin">
          {!UserInfor.isLogin ? (
            <>
              <button
                onClick={() => setIsOpenModal(LOGIN_MODAL)}
                className="login"
              >
                <b>Đăng Nhập</b>
              </button>
              <button
                onClick={() => setIsOpenModal(SIGNUP_MODAL)}
                className="signin"
              >
                <b>Đăng Ký</b>
              </button>
            </>
          ) : (
            <>
              <div className="avatar">
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
