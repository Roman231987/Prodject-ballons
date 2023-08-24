import styles from "./Button.module.scss";

interface ButtoProps {
  children: React.ReactNode;
  btn_animateds?: boolean;
}

const Button: React.FC<ButtoProps> = ({ children, btn_animateds }) => {
  return (
    <button
      className={
        btn_animateds ? `${styles.btn} ${styles.btn_animated}` : `${styles.btn}`
      }
    >
      {children}
    </button>
  );
};

export default Button;
