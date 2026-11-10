import aviceFace768 from '../assets/avice_face-768.webp';
import aviceFace1280 from '../assets/avice_face-1280.webp';
import aviceFace2560 from '../assets/avice_face-2560.webp';
import '../styles/MainPage.css';
import tier30 from '../assets/30.webp';
import Reveal from './Reveal';

function MainPage() {
  return (
    <main>
      <section className="mainPage">
        <div className="mainPage-image">
          <img
            src={aviceFace1280}
            srcSet={`${aviceFace768} 768w, ${aviceFace1280} 1280w, ${aviceFace2560} 2560w`}
            sizes="(max-width: 800px) 100vw, 65vw"
            alt="avice"
            width="5840"
            height="2916"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="mainPage-ribbon" />
        <div className="mainPage-stripe" />
        <div className="mainPage-panel">
          <Reveal className="mainPage-text">
            <p className="mainPage-label">Народный Твич Стример</p>
            <h1>avice</h1>
            <p className="mainPage-desc">(не чсв)</p>
            <div className="mainPage-actions">
              <a
                className="btn btn-primary"
                href="https://www.twitch.tv/avice"
                target="_blank"
                rel="noreferrer"
              >
                Смотреть на Twitch
              </a>
              <a className="btn btn-outline" href="#about">
                Подробнее
              </a>
            </div>
          </Reveal>
          <Reveal className="tier30-reveal">
            <img src={tier30} alt="30" className="tier30-image" />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default MainPage;
