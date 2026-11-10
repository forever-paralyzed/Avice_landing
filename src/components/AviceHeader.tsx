import '../styles/AviceHeader.css';
import tier30 from '../assets/30.webp';

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#" aria-label="avice — на главную">
        <span>avice</span>
        <img src={tier30} alt="" />
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
