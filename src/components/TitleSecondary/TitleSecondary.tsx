import styles from "./TitleSecondary.module.scss";

interface TitleSecondaryProps {
  children: React.ReactNode;
}

const TitleSecondary: React.FC<TitleSecondaryProps> = ({ children }) => {
  return <h2 className={styles.titleSecondary}>{children}</h2>;
};

export default TitleSecondary;
