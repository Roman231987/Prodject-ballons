import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <input
        className={styles.navigation__toggle}
        type="checkbox"
        id="navi__toggle"
      />
      <label className={styles.navigation__button} htmlFor="navi__toggle">
        <span className={styles.navigation__icon}></span>
      </label>
      <div className={styles.navigation__background}></div>
      <nav className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <a href="##" className={styles.navigation__link}>
              ПРО НАСС
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="##" className={styles.navigation__link}>
              СКИДКИ
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="##" className={styles.navigation__link}>
              КРАЩІ ТУРИ
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="##" className={styles.navigation__link}>
              КАЛЬКУЛЯТОР ЦІНИ
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="##" className={styles.navigation__link}>
              ЗВ'ЯЗАТИСЯ З НАМИ
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
