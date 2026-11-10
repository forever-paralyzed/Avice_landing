import { useEffect, useRef, useState, type CSSProperties } from 'react';
import Reveal from './Reveal';
import HeroDescription from './HeroDescription';
import { heroes } from '../data/heroes';
import '../styles/Heroes.css';
import tier30Small from '../assets/30-64.webp';
import tier30Large from '../assets/30-128.webp';
import arrow from './arrow-128.webp';

type HeroThemeStyle = CSSProperties & { '--hero-theme': string };

function Heroes() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'next' | 'previous'>(
    'next',
  );
  const [hasChangedSlide, setHasChangedSlide] = useState(false);
  const activeHero = heroes[activeIndex];

  const selectHero = (index: number, direction: 'next' | 'previous') => {
    if (index === activeIndex) return;

    setSlideDirection(direction);
    setHasChangedSlide(true);
    setActiveIndex(index);
  };

  const showPreviousHero = () => {
    selectHero((activeIndex - 1 + heroes.length) % heroes.length, 'previous');
  };
  const showNextHero = () => {
    selectHero((activeIndex + 1) % heroes.length, 'next');
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

      const carousel = carouselRef.current;
      if (!carousel) return;

      const target = event.target;
      if (target instanceof HTMLElement) {
        const isTyping = target.closest(
          'input, textarea, select, [contenteditable="true"]',
        );
        const isOutsideCarousel =
          target !== document.body && !carousel.contains(target);

        if (isTyping || isOutsideCarousel) return;
      }

      const bounds = carousel.getBoundingClientRect();
      const isVisible = bounds.bottom > 0 && bounds.top < window.innerHeight;
      if (!isVisible) return;

      event.preventDefault();
      setHasChangedSlide(true);
      if (event.key === 'ArrowLeft') {
        setSlideDirection('previous');
        setActiveIndex((index) => (index - 1 + heroes.length) % heroes.length);
      } else {
        setSlideDirection('next');
        setActiveIndex((index) => (index + 1) % heroes.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="heroes" id="heroes" aria-labelledby="heroes-title">
      <Reveal className="heroes-content">
        <h2 id="heroes-title">На ком играет Avice?</h2>
        <div
          ref={carouselRef}
          className="heroes-carousel"
          role="region"
          aria-label="Карусель героев Dota 2"
          aria-keyshortcuts="ArrowLeft ArrowRight"
          tabIndex={0}
        >
          <article
            key={activeHero.name}
            id="heroes-slide"
            className={`heroes-feature${hasChangedSlide ? ` heroes-feature--${slideDirection}` : ''}${activeHero.description.length > 220 ? ' heroes-feature--long-description' : ''}`}
            style={{ '--hero-theme': activeHero.theme } as HeroThemeStyle}
            role="group"
            aria-roledescription="слайд"
            aria-label={`${activeIndex + 1} из ${heroes.length}: ${activeHero.name}`}
          >
            <div className="heroes-feature-visual">
              {activeHero.image ? (
                <img
                  className="heroes-feature-image"
                  src={activeHero.image}
                  srcSet={activeHero.imageSrcSet}
                  sizes="(max-width: 600px) calc(100vw - 36px), (max-width: 800px) 54vw, (max-width: 1328px) 48vw, 614px"
                  alt={activeHero.name}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="heroes-feature-art" aria-hidden="true">
                  <span>{activeHero.name.charAt(0)}</span>
                </div>
              )}
            </div>
            <div className="heroes-feature-copy">
              <h3>
                {activeHero.name}
                <img
                  className="heroes-feature-tier"
                  src={tier30Small}
                  srcSet={`${tier30Small} 64w, ${tier30Large} 128w`}
                  sizes="60px"
                  alt="Tier 30"
                  width="60"
                  height="60"
                  loading="lazy"
                  decoding="async"
                />
              </h3>

              <p className="heroes-feature-label">
                {activeHero.featured
                  ? 'Сигнатурный герой avice'
                  : 'Герой Dota 2'}
              </p>

              <HeroDescription description={activeHero.description} />
            </div>
            <button
              className="heroes-arrow heroes-arrow--previous"
              type="button"
              aria-label="Предыдущий герой"
              aria-controls="heroes-slide"
              onClick={showPreviousHero}
            >
              <img
                className="heroes-arrow-image"
                src={arrow}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </button>
            <button
              className="heroes-arrow heroes-arrow--next"
              type="button"
              aria-label="Следующий герой"
              aria-controls="heroes-slide"
              onClick={showNextHero}
            >
              <img
                className="heroes-arrow-image"
                src={arrow}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </button>
          </article>
          <div className="heroes-dots" aria-label="Выбор слайда">
            {heroes.map((hero, index) => (
              <button
                key={hero.name}
                className={`heroes-dot${index === activeIndex ? ' is-active' : ''}`}
                type="button"
                aria-label={`Показать слайд ${index + 1}: ${hero.name}`}
                aria-pressed={index === activeIndex}
                onClick={() =>
                  selectHero(index, index > activeIndex ? 'next' : 'previous')
                }
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default Heroes;
