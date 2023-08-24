import ButtonlinkType from "../../Buttons/ButtonlinkType/ButtonlinkType";
import styles from "./CardTour.module.scss";

interface CardTourProps {
  img?: string;
  textSpan_1?: string;
  textSpan_2?: string;
  tourDescription?: React.ReactNode;
  paragraphText_1?: string;
  paragraphText_2?: string;
  textButton?: string;
}

const CardTour: React.FC<CardTourProps> = ({
  img,
  textSpan_1,
  textSpan_2,
  tourDescription,
  paragraphText_1,
  paragraphText_2,
  textButton,
}) => {
  return (
    <div className={styles.cardTour}>
      <div
        className={`${styles.cardTour__side} ${styles.cardTour__side_front}`}
      >
        <div className={styles.cardTour__img}>
          <img
            className={styles.cardTour__img_style}
            src={img}
            alt="img card tour"
          />
        </div>
        <h4 className={styles.cardTour__title}>
          <span
            className={`${styles.cardTour__span} ${styles.cardTour__span_1}`}
          >
            {textSpan_1}
          </span>
          <br />
          <span
            className={`${styles.cardTour__span} ${styles.cardTour__span_2}`}
          >
            {textSpan_2}
          </span>
        </h4>
        <div className={styles.cardTour__desc}>{tourDescription}</div>
      </div>

      <div className={`${styles.cardTour__side} ${styles.cardTour__side_back}`}>
        <div className={styles.cardTour__backSide_box}>
          <p className={`${styles.cardTour__text} ${styles.cardTour__text_1}`}>
            {paragraphText_1}
          </p>
          <p className={`${styles.cardTour__text} ${styles.cardTour__text_2}`}>
            {paragraphText_2}
          </p>
          <ButtonlinkType btn_animateds={false}>{textButton}</ButtonlinkType>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
