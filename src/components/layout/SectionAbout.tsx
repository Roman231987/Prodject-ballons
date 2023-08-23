import TitleSecondary from "../TitleSecondary/TitleSecondary";
import ButtonText from "../Buttons/ButtonText/ButtonText";
import Composition from "../Composition/Composition";
import CardWithText from "../Cards/CardWithText/CardWithText";
import styles from "./SectionAbout.module.scss";

const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className="text_align_center margin-bottom-80px">
        <TitleSecondary>Неймовірне відчуття свободи</TitleSecondary>
      </div>
      <div className={styles.wraper}>
        <div className={styles.wraper__row}>
          <CardWithText
            text_title_h3={"ДОЗВОЛЬТЕ СОБІ ПРИГОДИ"}
            paragraph_text={
              "Завдання організації, особливо ж розвиток різних форм діяльності тягне за собою процес впровадження i модернізації відповідних умов активізації. Таким чином початок повсякденної роботи з формування позиції тягне."
            }
          />
          <CardWithText
            text_title_h3={"ВВЕРХ НА 6000 МЕТРІВ НАД РІВНЕМ МОРЯ"}
            paragraph_text={
              "Завдання організації, особливо ж розвиток різних форм діяльності тягне за собою процес впровадження i модернізації відповідних умов активізації. Таким чином початок повсякденної роботи з формування позиції тягне."
            }
          />
          <ButtonText> Дізнатися більше &rarr;</ButtonText>
        </div>
        <div className={styles.wraper__img}>
          <Composition />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
