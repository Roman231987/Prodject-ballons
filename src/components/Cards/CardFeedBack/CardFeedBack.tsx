import CardWithText from "../CardWithText/CardWithText";
import styles from "./CardFeedBack.module.scss";

interface CardFeedBackProps {
  img: string;
  personeName: string;
  text_title_h3: string;
  paragraph_text: string;
}

const CardFeedBack: React.FC<CardFeedBackProps> = ({
  img,
  personeName,
  text_title_h3,
  paragraph_text,
}) => {
  return (
    <div className={styles.cardFeedBack}>
      <div>
        <figure className={styles.cardFeedBack__img}>
          <img src={img} alt="persone" />
          <figcaption className={styles.cardFeedBack__name}>
            {personeName}
          </figcaption>
        </figure>
      </div>
      <CardWithText
        text_title_h3={text_title_h3}
        paragraph_text={paragraph_text}
      ></CardWithText>
    </div>
  );
};

export default CardFeedBack;
