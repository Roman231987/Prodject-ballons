import Icon from "../../IcomoonReact/Icon";
import CardAdventure from "../CardAdventure/CardAdventure";
import styles from "./SectionAdventure.module.scss";

const SectionAdventure = () => {
  return (
    <section className={styles.section__adventure}>
      <div className={styles.section__adventure_wraper}>
        <CardAdventure
          text_title_h3={"ПРИКЛЮЧЕНИЕ"}
          paragraph_text={
            "Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных"
          }
        >
          <Icon className={styles.icon__styles} icon="vector-3" />
        </CardAdventure>

        <CardAdventure
          text_title_h3={"ПРИКЛЮЧЕНИЕ"}
          paragraph_text={
            "Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных"
          }
        >
          <Icon className={styles.icon__styles} icon="vector-2" />
        </CardAdventure>
        <CardAdventure
          text_title_h3={"ПРИКЛЮЧЕНИЕ"}
          paragraph_text={
            "Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных"
          }
        >
          <Icon className={styles.icon__styles} icon="vector" />
        </CardAdventure>
        <CardAdventure
          text_title_h3={"ПРИКЛЮЧЕНИЕ"}
          paragraph_text={
            "Задача организации, в особенности же дальнейшее развитие различных в особенности же развитие различных"
          }
        >
          <Icon className={styles.icon__styles} icon="vector-1" />
        </CardAdventure>
      </div>
    </section>
  );
};

export default SectionAdventure;
