import './index.css';
import MainPage from './components/MainPage';
import Header from './components/AviceHeader';
import About from './components/About';
import SectionDivider from './components/SectionDivider';
import Heroes from './components/Heroes';
import Clips from './components/Clips';
import Socials from './components/Socials';
import Footer from './components/Footer';
import RevealGroup from './components/RevealGroup';

function App() {
  return (
    <div>
      <Header />
      <RevealGroup>
        <MainPage />
      </RevealGroup>
      <SectionDivider />
      <RevealGroup>
        <About />
      </RevealGroup>
      <SectionDivider />
      <Heroes />
      <SectionDivider />
      <RevealGroup>
        <Clips />
      </RevealGroup>
      <SectionDivider />
      <RevealGroup>
        <Socials />
      </RevealGroup>
      <Footer />
    </div>
  );
}

export default App;
