import Icon_logo from "../../images/icon/Icon-logo.svg";
import Butto from "../Button/Button";
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
            ТУРЫ НА ВОЗДУШНОМ ШАРЕ
          </span>
          <span className={styles.titleFirst__secondary}>
            незабываемое приключение ждет вас
          </span>
        </h1>
        <Butto btn_animateds={true}>НАШ КАТАЛОГ</Butto>
      </div>
    </header>
  );
};

export default Header;
