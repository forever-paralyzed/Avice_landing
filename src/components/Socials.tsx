import type { CSSProperties } from 'react';
import twitchLogo from '../assets/twitch-128.webp';
import '../styles/Socials.css';
import avicePFP from '../assets/avicepfp-200.webp';
import avicePFPHighResolution from '../assets/avicepfp-299.webp';
import tg from '../assets/tg-128.webp';
import uTube from '../assets/uTube-128.webp';
import vk from '../assets/vk-128.webp';
import macanPic from '../assets/macan-400.webp';

type Social = {
  name: string;
  icon: string;
  accent: string;
  href: string;
};

type SocialAccentStyle = CSSProperties & { '--social-accent': string };

const socials: Social[] = [
  {
    name: 'Twitch',
    icon: twitchLogo,
    accent: '#9146ff',
    href: 'https://www.twitch.tv/avice',
  },
  {
    name: 'YouTube',
    icon: uTube,
    accent: '#ff4545',
    href: 'https://www.youtube.com/@avice444',
  },
  {
    name: 'Telegram',
    icon: tg,
    accent: '#39a9e8',
    href: 'https://t.me/aviciixd',
  },
  {
    name: 'VK',
    icon: vk,
    accent: '#5281b8',
    href: 'https://vk.ru/avicexdd',
  },
];

function Socials() {
  return (
    <section className="socials" id="socials" aria-labelledby="socials-title">
      <div className="socials-content">
        <h2 id="socials-title">Соцсети Артема</h2>
        <div className="avice-pfp">
          <img
            src={avicePFP}
            srcSet={`${avicePFP} 200w, ${avicePFPHighResolution} 299w`}
            sizes="200px"
            alt=""
            width="200"
            height="200"
            loading="lazy"
            decoding="async"
          />
          <img src={macanPic} alt="" className="macan" loading="lazy" decoding="async" />
        </div>

        <div className="socials-grid">
          {socials.map((social) => (
            <a
              className="social-link"
              href={social.href}
              key={social.name}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
              title={social.name}
              style={{ '--social-accent': social.accent } as SocialAccentStyle}
            >
              <img src={social.icon} alt="" loading="lazy" decoding="async" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Socials;
