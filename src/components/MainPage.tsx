import aviceFace from '../assets/avice_face.png';
import '../styles/MainPage.css';
import tier30 from '../assets/30.png';
import Reveal from './Reveal';

function MainPage() {
  return (
    <main>
      <section className="mainPage">
        <div className="mainPage-image">
          <img src={aviceFace} alt="avice" />
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
