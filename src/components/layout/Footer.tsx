import styles from "./Footer.module.scss";
import Icon_logo from "../../images/icon/Icon-logo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <a href="##">
          <img
            className={styles.footer__logo_img}
            src={Icon_logo}
            alt="Логоти повітряна куля"
          />
        </a>
        <nav>
          <ul className={styles.footer__list}>
            <li className={styles.footer__list_item}>
              <a className={styles.footer__list_link} href="##">
                ПРО НАСС
              </a>
            </li>
            <li className={styles.footer__list_item}>
              <a className={styles.footer__list_link} href="##">
                СКИДКИ
              </a>
            </li>
            <li className={styles.footer__list_item}>
              <a className={styles.footer__list_link} href="##">
                КРАЩІ ТУРИ
              </a>
            </li>
            <li className={styles.footer__list_item}>
              <a className={styles.footer__list_link} href="##">
                КАЛЬКУЛЯТОР ЦІНИ
              </a>
            </li>
            <li className={styles.footer__list_item}>
              <a className={styles.footer__list_link} href="##">
                ЗВ'ЯЗАТИСЯ З НАМИ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
