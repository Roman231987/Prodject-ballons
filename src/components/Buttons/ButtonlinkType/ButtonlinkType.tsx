import styles from "./ButtonlinkType.module.scss";

interface ButtonlinkTypeProps {
  children: React.ReactNode;
  btn_animateds: boolean;
}

const ButtonlinkType: React.FC<ButtonlinkTypeProps> = ({
  children,
  btn_animateds,
}) => {
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

export default ButtonlinkType;
