import CardWithText from "../CardWithText/CardWithText";
import styles from "./CardAdventure.module.scss";

interface CardAdventureProps {
  children?: React.ReactNode;
  text_title_h3: string;
  paragraph_text: string;
}

const CardAdventure: React.FC<CardAdventureProps> = ({
  children,
  text_title_h3,
  paragraph_text,
}) => {
  return (
    <div className={styles.card__adventure}>
      <div className={styles.card__adventure_icon}>{children}</div>
      <CardWithText
        text_title_h3={text_title_h3}
        paragraph_text={paragraph_text}
      ></CardWithText>
    </div>
  );
};

export default CardAdventure;
