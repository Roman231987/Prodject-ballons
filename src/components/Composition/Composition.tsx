import photo1 from "../../images/photo-ballons/photo1.png";
import photo2 from "../../images/photo-ballons/photo2.png";
import photo3 from "../../images/photo-ballons/photo3.png";
import styles from "./Composition.module.scss";

const Composition = () => {
  return (
    <div className={styles.composition}>
      <img
        src={photo1}
        alt="Photo_ballons-1"
        className={`${styles.composition__photo} ${styles.composition__photo_n1}`}
      />
      <img
        src={photo2}
        alt="Photo_ballons-2"
        className={`${styles.composition__photo} ${styles.composition__photo_n2}`}
      />
      <img
        src={photo3}
        alt="Photo_ballons-3"
        className={`${styles.composition__photo} ${styles.composition__photo_n3}`}
      />
    </div>
  );
};

export default Composition;
