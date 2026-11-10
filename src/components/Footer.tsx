import tier30 from '../assets/30.webp';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a className="footer-brand" href="#" aria-label="avice — наверх">
        <span>avice</span>
        <img src={tier30} alt="" loading="lazy" decoding="async" />
      </a>
      <p className="footer-caption">Народный Twitch-стример</p>
      <span className="footer-copyright">
        © {new Date().getFullYear()} forever-paralyzed
      </span>
      <a className="footer-top" href="#" aria-label="Вернуться наверх">
        ↑
      </a>
    </footer>
  );
}

export default Footer;
