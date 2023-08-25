import Header from "./components/layout/Header";
import SectionAbout from "./components/layout/SectionAbout";
import SectionAdventure from "./components/layout/SectionAdventure";
import SectionFeedBack from "./components/layout/SectionFeedBack";
import SectionTour from "./components/layout/SectionTour";
import SectionBooking from "./components/layout/SectionBooking";
import Footer from "./components/layout/Footer";
import styles from "./App.module.scss";

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <Header />
        <main>
          <SectionAbout />
          <SectionAdventure />
          <SectionTour />
          <SectionFeedBack />
          <SectionBooking />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
