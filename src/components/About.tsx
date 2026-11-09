import '../styles/About.css';
import Reveal from './Reveal';
import cs30cherep from '../assets/cs30cherep.png';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={cs30cherep} alt="" />
      </div>
      <div className="about-ribbon" />
      <div className="about-stripe" />
      <div className="about-panel">
        <Reveal className="about-text">
          <h1>кто такой avice?</h1>
          <div className="about-desc" aria-label="Блок для описания">
            <p>
              <b>Avice</b> (настоящее имя — <b>Артём Темнов</b>) — российский
              киберспортсмен и популярный стример по Dota 2.
            </p>
            <p>
              <b>Артём</b> имеет большую аудиторию (более 240 тысяч
              подписчиков), активно стримит паблики и турниры.
            </p>
            <p>
              Выступал в различных миксах и командах, например zxcrsd, RodjT,
              By_owl и RFK.
            </p>
            <p>
              Породил такие мемы, как <b>«30», «КС», «череп» и «ЧСВ»</b>.
            </p>
            <p>
              Известен любовью к герою <b>Morphling</b>.
            </p>
            <p>
              А так же своей<b> внушающей харизмой</b> и уникальным
              взаимодействием с аудиторией.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;
