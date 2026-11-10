import '../styles/AviceHeader.css';
import tier30Small from '../assets/30-64.webp';
import tier30Large from '../assets/30-128.webp';

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#" aria-label="avice — на главную">
        <span>avice</span>
        <img
          src={tier30Small}
          srcSet={`${tier30Small} 64w, ${tier30Large} 128w`}
          sizes="(max-width: 800px) 26px, 34px"
          alt=""
          width="34"
          height="34"
          decoding="async"
        />
      </a>
      <nav className="header-nav" aria-label="Основная навигация">
        <a href="#about"><span>О avice</span></a>
        <a href="#heroes"><span>Герои</span></a>
        <a href="#clips"><span>Клипы</span></a>
        <a href="#socials"><span>Соцсети</span></a>
      </nav>
    </header>
  );
}

export default Header;
