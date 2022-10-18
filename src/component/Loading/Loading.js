import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./Loading.module.scss";

const cx = classNames.bind(styles);

const Loading = () => {
  return <FontAwesomeIcon icon={faSpinner} className={cx("loading-icon")} />;
};

export default Loading;
