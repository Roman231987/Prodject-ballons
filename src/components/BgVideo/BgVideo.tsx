import styles from "./BgVideo.module.scss";

interface BgVideoProps {
  videoType_1?: string;
  videoType_2: string;
}

const BgVideo: React.FC<BgVideoProps> = ({ videoType_1, videoType_2 }) => {
  return (
    <>
      <div className={styles.bgGradient}></div>
      <video className={styles.bgVideo} autoPlay muted loop>
        <source src={videoType_1}></source>
        <source src={videoType_2}></source>
      </video>
    </>
  );
};

export default BgVideo;
