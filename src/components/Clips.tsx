import '../styles/Clips.css';
import clip1avce from '../assets/clips/clip1.webp';
import clip2avce from '../assets/clips/clip2.webp';
import clip3avce from '../assets/clips/clip3.webp';
import twitch from '../assets/twitch.webp';

function Clips() {
  const clips = [
    {
      id: 1,
      title: 'Артем смотрит смешное фанатское ИИ видео',
      url: 'https://www.twitch.tv/avice/clip/CourageousHilariousMonkeySuperVinlin-yLAV3QlydmMqnjSX',
      preview: clip1avce,
    },
    {
      id: 2,
      title: 'Темыч при игре на шторме дал рискованное обещание',
      url: 'https://www.twitch.tv/avice/clip/SmallCloudyBottlePanicVis-rnudp7NadNoP650X',
      preview: clip2avce,
    },
    {
      id: 3,
      title: 'Момент где у Артема «сгорело» при игре на morphling',
      url: 'https://www.twitch.tv/avice/clip/ProudHungryNostrilCharlieBitMe-siEJ3UfW64imavcd',
      preview: clip3avce,
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
            <img className="clip-card-preview" src={clip.preview} alt="" loading="lazy" decoding="async" />
            <img className="clip-platform-image" src={twitch} alt="Twitch" loading="lazy" decoding="async" />
            <span className="clip-play" aria-hidden="true" />
            <h3 className="clip-card-title">{clip.title}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Clips;
