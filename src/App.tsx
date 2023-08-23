import styles from "./App.module.scss";
import Header from "./components/layout/Header";
import SectionAbout from "./components/layout/SectionAbout";
import SectionAdventure from "./components/layout/SectionAdventure";
import SectionTour from "./components/layout/SectionTour";

function App() {
  return (
    <div className="App">
      <div className={styles.container}>
        <Header />
        <main>
          <SectionAbout />
          <SectionAdventure />
          <SectionTour />
        </main>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
