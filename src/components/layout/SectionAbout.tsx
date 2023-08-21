import TitleSecondary from "../TitleSecondary/TitleSecondary";
import CardWithText from "../CardWithText/CardWithText";
import styles from "./SectionAbout.module.scss";
import ButtonText from "../ButtonText/ButtonText";
import Composition from "../Composition/Composition";

const SectionAbout = () => {
  return (
    <section className={styles.section__about}>
      <div className="text_align_center margin-bottom-80px">
        <TitleSecondary />
      </div>
      <div className={styles.wraper}>
        <div className={styles.wraper__row}>
          <CardWithText
            text_title_h3={"ПОЗВОЛЬТЕ СЕБЕ ПРИКЛЮЧЕНИЕ"}
            paragraph_text={
              "Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрениям и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет."
            }
          />
          <CardWithText
            text_title_h3={"ВВЕРХ НА 6000 МЕТРОВ НАД УРОВНЕМ МОРЯ"}
            paragraph_text={
              "Задача организации, в особенности же дальнейшее развитие различных форм деятельности влечет за собой процесс внедрения и модернизации соответствующий условий активизации. Таким образом начало повседневной работы по формированию позиции влечет."
            }
          />
          <ButtonText> Узнать больше &rarr;</ButtonText>
        </div>
        <div className={styles.wraper__img}>
          <Composition />
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
