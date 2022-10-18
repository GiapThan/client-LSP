import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import { publicRoutes } from "../../../routes/index";
import styles from "./Header.module.scss";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import logo from "../../../access/image/lo.jpg";
import Modal from "../../../component/Modal/Modal";
import PopperWrapper from "../../../component/PopperWrapper/PopperWrapper";
import Loading from "../../../component/Loading/Loading";
import userApi from "../../../api/userApi";
import { deleteUserInfor } from "../../../redux/userSlice";

const LOGIN_MODAL = "LOGIN_MODAL";
const SIGNUP_MODAL = "SIGNUP_MODAL";

const cx = classNames.bind(styles);

function Header() {
  const dispatch = useDispatch();
  const UserInfor = useSelector((state) => state.user);
  const [isOpenModal, setIsOpenModal] = useState(null);
  const [isLogoutLoading, setIsLogoutLoading] = useState(false);

  const handleCloseModal = (type = null) => {
    setIsOpenModal(type);
  };

  const handleLogOut = async () => {
    setIsLogoutLoading(true);
    try {
      let result = await userApi.userLogOut();
      if (result) {
        dispatch(deleteUserInfor());
        setIsLogoutLoading(false);
      }
    } catch (error) {
      setIsLogoutLoading(false);
      console.log(error);
    }
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
              <NavLink
                to={publicRoutes.examCreate}
                className={({ isActive }) => {
                  return isActive ? cx("exam-btn", "active") : cx("exam-btn");
                }}
              >
                <FontAwesomeIcon icon={faPlus} />
                Tạo bài
              </NavLink>
              <NavLink
                to={publicRoutes.examEdit}
                className={({ isActive }) => {
                  return isActive ? cx("exam-btn", "active") : cx("exam-btn");
                }}
              >
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
              <Tippy
                interactive
                placement="bottom-end"
                render={(attrs) => (
                  <PopperWrapper>
                    <div {...attrs} className={cx("user-option")}>
                      <span>
                        <NavLink to="/">Chỉnh sửa thông tin</NavLink>
                      </span>
                      <span onClick={handleLogOut}>
                        Đăng suất
                        {isLogoutLoading && <Loading />}
                      </span>
                    </div>
                  </PopperWrapper>
                )}
              >
                <div className={cx("avatar")}></div>
              </Tippy>
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
            <Login onChangeTypeModal={handleCloseModal} />
          ) : (
            <Signup onChangeTypeModal={handleCloseModal} />
          )}
        </Modal>
      </div>
    </>
  );
}

export default Header;
