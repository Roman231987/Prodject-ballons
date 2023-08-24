import BookingForm from "../BookingForm/BookingForm";
import styles from "./SectionBooking.module.scss";

const SectionBooking = () => {
  return (
    <section className={styles.SectionBooking}>
      <div className={styles.booking}>
        <BookingForm></BookingForm>
      </div>
    </section>
  );
};

export default SectionBooking;
