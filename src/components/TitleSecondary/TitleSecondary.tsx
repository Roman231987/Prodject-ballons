import styles from "./TitleSecondary.module.scss";

interface TitleSecondaryProps {
  children: React.ReactNode;
  color_h2_text_is_white?: boolean;
}


 
const TitleSecondary: React.FC<TitleSecondaryProps> = ({
  children,
  color_h2_text_is_white,
}) => {
  return (
    <h2
      className={color_h2_text_is_white ? `${styles.titleSecondary} ${styles.titleSecondary_white}` : `${styles.titleSecondary}`}
    >
      {children}
    </h2>
  );
};

export default TitleSecondary;
