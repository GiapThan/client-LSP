import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { publicRoutes } from "../../../routes/index";
import styles from "./Header.module.scss";
import "./Header.scss";
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
          <Link to={publicRoutes.home}>
            <img className={cx("logo-item")} src={logo} alt="logo" />
          </Link>
        </div>
        <div className={cx("option")}>
          {!UserInfor.isLogin ? (
            <></>
          ) : (
            <>
              <NavLink to={publicRoutes.examCreate} className={cx("exam-btn")}>
                <FontAwesomeIcon icon={faPlus} />
                Tạo bài
              </NavLink>
              <NavLink to={publicRoutes.examEdit} className={cx("exam-btn")}>
                <FontAwesomeIcon icon={faPenToSquare} />
                Sửa bài
              </NavLink>
            </>
          )}
          {!UserInfor.isLogin ? (
            <div className={cx("login-signin")}>
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
            </div>
          ) : (
            <div className={cx("avatar-wrapper")}>
              <div className={cx("avatar")}></div>
              <p className={cx("name")}>{UserInfor.userName}</p>
            </div>
          )}
        </div>

        <Modal
          containerId="Modal-Form-Login"
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
