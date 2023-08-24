import hot_air_balloons_1 from "../../images/video/hot_air_balloons_1.mp4";
import hot_air_balloons_2 from "../../images/video/hot_air_balloons_2.webm";
import CardFeedBack from "../Cards/CardFeedBack/CardFeedBack";
import TitleSecondary from "../TitleSecondary/TitleSecondary";
import feed_back_1 from "../../images/card-feed_back/feed_back_1.jpg";
import feed_back_2 from "../../images/card-feed_back/feed_back_2.jpg";
import BgVideo from "../BgVideo/BgVideo";
import ButtonlinkType from "../Buttons/ButtonlinkType/ButtonlinkType";
import styles from "./SectionFeedBack.module.scss";

const SectionFeedBack = () => {
  return (
    <section className={styles.sectionFeedBack}>
      <BgVideo
        videoType_1={hot_air_balloons_1}
        videoType_2={hot_air_balloons_2}
      />
      <div className="text_align_center margin-bottom-80px">
        <TitleSecondary color_h2_text_is_white={true}>
          ВІДГУКИ НАШИХ КЛІЄНТІВ
        </TitleSecondary>
      </div>
      <div className={styles.sectionFeedBack__Wraper}>
        <CardFeedBack
          img={feed_back_1}
          personeName={"АНТОН РЯБIН"}
          text_title_h3={"Я ОТРИМАВ МАСУ ВРАЖЕНЬ"}
          paragraph_text={
            "Завдання організації, особливо ж розвиток різних форм діяльності тягне за собою процес впровадження та модернізації відповідних умов активізації. Таким чином, початок повсякденної роботи з формування позиції тягне."
          }
        ></CardFeedBack>
        <CardFeedBack
          img={feed_back_2}
          personeName={"ЛIЗА ФРОЛОВА"}
          text_title_h3={"ЦЕ БУЛО ЧУДОВО I НЕЗАБУТНЬО"}
          paragraph_text={
            "Завдання організації, особливо ж розвиток різних форм діяльності тягне за собою процес впровадження та модернізації відповідних умов активізації. Таким чином, початок повсякденної роботи з формування позиції тягне."
          }
        ></CardFeedBack>
      </div>
      <div className="text_align_center">
        <ButtonlinkType btn_animateds={false}>ЗАБРОНЮВАТИ</ButtonlinkType>
      </div>
    </section>
  );
};

export default SectionFeedBack;
