import { useState } from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import Portal from "../../../component/Portal/Portal";
import Login from "../Login/Login";
import logo from "../../../access/image/logo.svg";
import Modal from "../../../component/Modal/Modal";

const LOGIN_MODAL = "LOGIN_MODAL";

function Header() {
  const [isLogin, setIsLogin] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleCloseModal = () => {
    setIsOpenModal(false);
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
          {isLogin ? (
            <>
              <button onClick={() => setIsOpenModal(true)} className="login">
                <b>Đăng Nhập</b>
              </button>
              <button onClick={() => setIsOpenModal(true)} className="signin">
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
          <Login />
        </Modal>
      </div>
    </>
  );
}

export default Header;
