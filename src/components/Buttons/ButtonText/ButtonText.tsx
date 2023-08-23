import styles from "./ButtonText.module.scss";

interface ButtonTextProps {
  children: React.ReactNode;
}

const ButtonText: React.FC<ButtonTextProps> = ({ children }) => {
  return (
    <a className={styles.btnText} href="##">
      {children}
    </a>
  );
};

export default ButtonText;
