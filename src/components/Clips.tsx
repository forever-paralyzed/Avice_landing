import '../styles/Clips.css';
import clip1Small from '../assets/clips/clip1-411.webp';
import clip1Large from '../assets/clips/clip1-822.webp';
import clip2Small from '../assets/clips/clip2-411.webp';
import clip2Large from '../assets/clips/clip2-822.webp';
import clip3Small from '../assets/clips/clip3-411.webp';
import clip3Large from '../assets/clips/clip3-822.webp';
import twitch from '../assets/twitch-128.webp';

function Clips() {
  const clips = [
    {
      id: 1,
      title: 'Артем смотрит смешное фанатское ИИ видео',
      url: 'https://www.twitch.tv/avice/clip/CourageousHilariousMonkeySuperVinlin-yLAV3QlydmMqnjSX',
      preview: clip1Small,
      previewSrcSet: `${clip1Small} 411w, ${clip1Large} 822w`,
    },
    {
      id: 2,
      title: 'Темыч при игре на шторме дал рискованное обещание',
      url: 'https://www.twitch.tv/avice/clip/SmallCloudyBottlePanicVis-rnudp7NadNoP650X',
      preview: clip2Small,
      previewSrcSet: `${clip2Small} 411w, ${clip2Large} 822w`,
    },
    {
      id: 3,
      title: 'Момент где у Артема «сгорело» при игре на morphling',
      url: 'https://www.twitch.tv/avice/clip/ProudHungryNostrilCharlieBitMe-siEJ3UfW64imavcd',
      preview: clip3Small,
      previewSrcSet: `${clip3Small} 411w, ${clip3Large} 822w`,
    },
  ];
  return (
    <section id="clips" className="clips">
      <h2>Клипы</h2>
      <h3>Самые интересные клипы канала Avice</h3>
      <div className="clips-grid">
        {clips.map((clip) => (
          <a
            className="clip-card"
            href={clip.url}
            key={clip.id}
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="clip-card-preview"
              src={clip.preview}
              srcSet={clip.previewSrcSet}
              sizes="(max-width: 416px) calc(100vw - 36px), (max-width: 560px) 380px, (max-width: 800px) 44vw, (max-width: 1328px) 31vw, 410px"
              alt=""
              width="411"
              height="548"
              loading="lazy"
              decoding="async"
            />
            <img
              className="clip-platform-image"
              src={twitch}
              alt="Twitch"
              width="128"
              height="128"
              loading="lazy"
              decoding="async"
            />
            <span className="clip-hover-action" aria-hidden="true">
              <img
                className="clip-hover-twitch"
                src={twitch}
                alt=""
                width="128"
                height="128"
                loading="lazy"
                decoding="async"
              />
              <span className="clip-hover-label">Смотреть клип на Twitch</span>
            </span>
            <h3 className="clip-card-title">{clip.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Clips;
