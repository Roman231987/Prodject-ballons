import styles from "./CardWithText.module.scss";

interface CardWithTextProps {
  children?: React.ReactNode;
  text_title_h3: string;
  paragraph_text: string;
}

const CardWithText: React.FC<CardWithTextProps> = ({
  children,
  text_title_h3,
  paragraph_text,
}) => {
  return (
    <div className={styles.CardWithText}>
      {children}
      <h3 className={styles.CardWithText_tiyle_h3}>{text_title_h3}</h3>
      <p className={styles.CardWithText_paragraph}>{paragraph_text}</p>
    </div>
  );
};

export default CardWithText;
