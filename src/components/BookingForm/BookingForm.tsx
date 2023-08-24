import Button from "../Buttons/Button/Button";
import TitleSecondary from "../TitleSecondary/TitleSecondary";
import styles from "./BookingForm.module.scss";

const BookingForm = () => {
  return (
    <div className={styles.bookingForm}>
      <form className={styles.form} action="#">
        <div className="margin-bottom-30px">
          <TitleSecondary>ЗАБРОНЮВАТИ ТУР</TitleSecondary>
        </div>
        <div className={styles.form__group}>
          <input
            className={styles.form__input}
            type="text"
            placeholder="Ім'я Прізвище"
            id="name"
            required
          />
          <label className={styles.form__label} htmlFor="name">
            Ваше Ім'я i Прізвище
          </label>
        </div>
        <div className={styles.form__group}>
          <input
            className={styles.form__input}
            type="email"
            placeholder="Ваш email"
            id="email"
            required
          />
          <label className={styles.form__label} htmlFor="email">
            Поштова адреса
          </label>
        </div>
        <div className={styles.form__group}>
          <div className={styles.form__group_radio}>
            <input
              className={styles.form__input_radio}
              type="radio"
              id="tour-1"
              name="cheked"
            />
            <label className={styles.form__label_radio} htmlFor="tour-1">
              <span className={styles.form__button_radio}></span>
              Груповий тур
            </label>
          </div>
          <div className={styles.form__group_radio}>
            <input
              className={styles.form__input_radio}
              type="radio"
              id="tour-2"
              name="cheked"
            />
            <label className={styles.form__label_radio} htmlFor="tour-2">
              <span className={styles.form__button_radio}></span>
              Індивідуальний тур
            </label>
          </div>
        </div>
        <div className={styles.form__group}>
          <Button>ЗАБРОНЮВАТИ</Button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;
