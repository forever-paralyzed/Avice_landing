import tier30Small from '../assets/30-64.webp';
import tier30Large from '../assets/30-128.webp';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a className="footer-brand" href="#" aria-label="avice — наверх">
        <span>avice</span>
        <img
          src={tier30Small}
          srcSet={`${tier30Small} 64w, ${tier30Large} 128w`}
          sizes="26px"
          alt=""
          width="26"
          height="26"
          loading="lazy"
          decoding="async"
        />
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
