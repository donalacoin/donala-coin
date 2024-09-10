import Navbar from './components/Navbar';
import FirstSection from './sections/FirstSection';
import SecondSection from './sections/SecondSection';
import FilmReel from './components/FilmReel';
import DonalaReel from './components/DonalaReel';
import ThirdSection from './sections/ThirdSection';
import RedStrip from './components/RedStrip';
import FourthSection from './sections/FourthSection';
import './styles/app.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <FilmReel />
      <SecondSection />
      <DonalaReel />
      <RedStrip />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default App;