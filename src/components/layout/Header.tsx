import Icon_logo from "../../images/icon/Icon-logo.svg";
import Button from "../Buttons/Button/Button";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__logo}
        src={Icon_logo}
        alt="Логоти повітряна куля"
      />
      <div className={styles.header__box}>
        <h1 className={styles.titleFirst}>
          <span className={styles.titleFirst__main}>
            ТУРИ НА ПОВІТРЯНІЙ КУЛІ
          </span>
          <span className={styles.titleFirst__secondary}>
            незабутня пригода чекає на вас
          </span>
        </h1>
        <Button btn_animateds={true}>НАШ КАТАЛОГ</Button>
      </div>
    </header>
  );
};

export default Header;
