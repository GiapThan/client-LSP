import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./ExamCreate.module.scss";

const cx = classNames.bind(styles);

function ExamCreate() {
  const Navigator = useNavigate();
  const UserInfor = useSelector((state) => state.user);

  const [nameExam, setNameExam] = useState("");
  const [countExam, setCountExam] = useState(0);
  const [subjects, setSubjects] = useState("");
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (!UserInfor.isLogin) {
      Navigator("/");
    }
  }, [Navigator, UserInfor.isLogin]);

  console.log(nameExam);
  console.log(+countExam);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <div className={cx("name")}>
          <label>Tên bài kiểm tra:</label>
          <input
            onChange={(e) => setNameExam(e.target.value)}
            type="text"
            value={nameExam}
          />
        </div>
        <div className={cx("infor")}>
          <label>Môn:</label>
          <input
            type="text"
            onChange={(e) => setSubjects(e.target.value)}
            value={subjects}
          />
          <label>Thời gian (phút):</label>
          <input
            type="number"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
        <div className={cx("count")}>
          <label>Số lượng câu hỏi:</label>
          <input
            onChange={(e) => setCountExam(e.target.value)}
            type="number"
            value={countExam}
          />
        </div>
      </div>
      <div className={cx("content")}></div>
    </div>
  );
}

export default ExamCreate;
