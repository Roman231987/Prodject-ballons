import TitleSecondary from "../TitleSecondary/TitleSecondary";
import cardTour_1 from "../../images/card-tour/card-tour_1.jpg";
import cardTour_2 from "../../images/card-tour/card-tour_2.jpg";
import cardTour_3 from "../../images/card-tour/card-tour_3.jpg";
import CardTour from "../Cards/CardTour/CardTour";
import ButtonlinkType from "../Buttons/ButtonlinkType/ButtonlinkType";
import styles from "./SectionTour.module.scss";

const SectionTour = () => {
  return (
    <section className={styles.sectionTour}>
      <div className="text_align_center margin-bottom-80px">
        <TitleSecondary>НАЙБІЛЬШ ПОПУЛЯРНІ ТУРИ</TitleSecondary>
      </div>
      <div className={styles.sectionTour__wraper}>
        <CardTour
          img={cardTour_1}
          textSpan_1={"ГРУПОВІ"}
          textSpan_2={"ТУРИ"}
          tourDescription={
            <ul>
              <li>Групи від 6 осіб</li>
              <li>Тривалість 2 год</li>
              <li>У групі 1 гід</li>
              <li>Дальність польоту 6км</li>
              <li>Безкоштовні сувеніри</li>
            </ul>
          }
          paragraphText_1={"ПОВНА ВАРТІСТЬ:"}
          paragraphText_2={"3000₴"}
          textButton={"ЗАБРОНЮВАТИ"}
        />
        <CardTour
          img={cardTour_2}
          textSpan_1={"ПРИВАТНІ"}
          textSpan_2={"ТУРИ"}
          tourDescription={
            <ul>
              <li>Групи від 6 осіб</li>
              <li>Тривалість 2 год</li>
              <li>У групі 1 гід</li>
              <li>Дальність польоту 6км</li>
              <li>Безкоштовні сувеніри</li>
            </ul>
          }
          paragraphText_1={"ПОВНА ВАРТІСТЬ:"}
          paragraphText_2={"3000₴"}
          textButton={"ЗАБРОНЮВАТИ"}
        />
        <CardTour
          img={cardTour_3}
          textSpan_1={"ОГЛЯДОВІ"}
          textSpan_2={" ПЛОЩАДКИ"}
          tourDescription={
            <ul>
              <li>Групи від 6 осіб</li>
              <li>Тривалість 2 год</li>
              <li>У групі 1 гід</li>
              <li>Дальність польоту 6км</li>
              <li>Безкоштовні сувеніри</li>
            </ul>
          }
          paragraphText_1={"ПОВНА ВАРТІСТЬ:"}
          paragraphText_2={"3000₴"}
          textButton={"ЗАБРОНЮВАТИ"}
        />
      </div>
      <div className="text_align_center">
        <ButtonlinkType btn_animateds={false}>ЗАБРОНЮВАТИ</ButtonlinkType>
      </div>
    </section>
  );
};

export default SectionTour;
