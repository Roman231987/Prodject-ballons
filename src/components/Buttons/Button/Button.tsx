import styles from "./Button.module.scss";

interface ButtoProps {
  children: React.ReactNode;
  btn_animateds: boolean;
}

const Button: React.FC<ButtoProps> = ({ children, btn_animateds }) => {
  return (
    <a
      className={
        btn_animateds ? `${styles.btn} ${styles.btn_animated}` : `${styles.btn}`
      }
      href="##"
    >
      {children}
    </a>
  );
};

export default Button;
