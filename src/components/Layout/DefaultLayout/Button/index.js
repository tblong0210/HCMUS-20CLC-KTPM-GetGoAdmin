import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Button.module.scss";

function CreateAccountBtn() {
  return (
    <div className={classes["createAccountBtn"]}>
      <div className={classes["createAccountBtn__icon"]}>
        <i className="fa-solid fa-plus"></i>
      </div>
      <div className={classes["createAccountBtn__text"]}>THÊM TÀI KHOẢN</div>
    </div>
  );
}

function CustomizeBtn(props) {
  const { iconBtn, titleBtn } = props;
  return (
    <div className={classes["customize-btn"]}>
      <div className={classes["customize-btn-icon"]}>
        {/* <img src={iconBtn} alt="none" /> */}
        <FontAwesomeIcon icon={iconBtn} />
      </div>
      <div className={classes["customize-btn-title"]}>{titleBtn}</div>
    </div>
  );
}

function FormBtn(props) {
  const { icon, title, color, containerStyle, onClick, textStyle } = props;
  return (
    <div className={classes["form-btn"]} style={containerStyle} onClick={onClick}>
      {icon && (
        <div className={classes["form-btn-icon"]} style={{ color: color }}>
          {icon}
        </div>
      )}
      <div className={classes["form-btn-title"]} style={textStyle}>
        {title}
      </div>
    </div>
  );
}

function ToolBtn(props) {
  const { icon, disable, onClick } = props;
  return (
    <div className={`${classes["tool-btn"]} ${disable && classes["btn--disable"]}`} onClick={onClick}>
      <FontAwesomeIcon icon={icon} color="white" />
    </div>
  );
}

export { CreateAccountBtn, CustomizeBtn, FormBtn, ToolBtn };
