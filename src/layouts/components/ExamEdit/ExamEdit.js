import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./ExamEdit.module.scss";

const cx = classNames.bind(styles);

function ExamEdit() {
  const navigator = useNavigate();
  const UserInfor = useSelector((state) => state.user);
  useEffect(() => {
    if (!UserInfor.isLogin) {
      navigator("/");
    }
  }, []);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div className={cx("name-exam")}>
          <label>Tên bài kiểm tra:</label>
          <input type="text" />
        </div>
        <div>
          <label>Số lượng câu hỏi:</label>
          <input type="number" />
        </div>
      </div>
      <div className={cx("content")}></div>
    </div>
  );
}

export default ExamEdit;
