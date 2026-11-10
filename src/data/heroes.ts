import emberImageSmall from '../assets/heroes/ember_spirit-480.webp';
import emberImageMedium from '../assets/heroes/ember_spirit-720.webp';
import emberImageLarge from '../assets/heroes/ember_spirit-960.webp';
import emberImageFull from '../assets/heroes/ember_spirit-1440.webp';
import invokerImageSmall from '../assets/heroes/invoker-480.webp';
import invokerImageMedium from '../assets/heroes/invoker-720.webp';
import invokerImageLarge from '../assets/heroes/invoker-960.webp';
import invokerImageFull from '../assets/heroes/invoker-1440.webp';
import meepoImageSmall from '../assets/heroes/meepo-480.webp';
import meepoImageMedium from '../assets/heroes/meepo-720.webp';
import meepoImageLarge from '../assets/heroes/meepo-960.webp';
import meepoImageFull from '../assets/heroes/meepo-1440.webp';
import morphlingImageSmall from '../assets/heroes/morphling-480.webp';
import morphlingImageMedium from '../assets/heroes/morphling-720.webp';
import morphlingImageLarge from '../assets/heroes/morphling-960.webp';
import morphlingImageFull from '../assets/heroes/morphling-1440.webp';
import puckImageSmall from '../assets/heroes/puck-480.webp';
import puckImageMedium from '../assets/heroes/puck-720.webp';
import puckImageLarge from '../assets/heroes/puck-960.webp';
import puckImageFull from '../assets/heroes/puck-1440.webp';
import queenOfPainImageSmall from '../assets/heroes/queenofpain-480.webp';
import queenOfPainImageMedium from '../assets/heroes/queenofpain-720.webp';
import queenOfPainImageLarge from '../assets/heroes/queenofpain-960.webp';
import queenOfPainImageFull from '../assets/heroes/queenofpain-1440.webp';
import shadowFiendImageSmall from '../assets/heroes/nevermore-480.webp';
import shadowFiendImageMedium from '../assets/heroes/nevermore-720.webp';
import shadowFiendImageLarge from '../assets/heroes/nevermore-960.webp';
import shadowFiendImageFull from '../assets/heroes/nevermore-1440.webp';
import stormSpiritImageSmall from '../assets/heroes/storm_spirit-480.webp';
import stormSpiritImageMedium from '../assets/heroes/storm_spirit-720.webp';
import stormSpiritImageLarge from '../assets/heroes/storm_spirit-960.webp';
import stormSpiritImageFull from '../assets/heroes/storm_spirit-1440.webp';
import tinkerImageSmall from '../assets/heroes/tinker-480.webp';
import tinkerImageMedium from '../assets/heroes/tinker-720.webp';
import tinkerImageLarge from '../assets/heroes/tinker-960.webp';
import tinkerImageFull from '../assets/heroes/tinker-1440.webp';

export type Hero = {
  name: string;
  description: string;
  theme: string;
  image: string | null;
  imageSrcSet?: string;
  featured?: boolean;
};

const morphDescr =
  'Темыч (Артем) имеет на морфлинге более 6 тысяч игр с впечатляющем процентом побед 58%, имеет звание «Амбассадор минералки» и невероятное понимание героя, которое отмечали многие профессианальные игроки.'; // описание морфа
const sfDescr =
  'Артем имеет более 1.5 тысячи игр на Shadow Fiend, играет на герое "для кайфа" и потому что герой очень эффектный, хоть и не такой сильный в последнее время как другие герои для Mid роли.'; // описание сфа
const meepoDescr =
  'Темыч обладает отличным понимаем героя и Микро-контролем на Meepo, одном из самых сложных героев доты, придумал свою "фирменную" раскачку способностей на герое.'; // описание мипо
const stormDescr =
  'Авайс так же играет на Шторм Спирите, имеет более тысячи игр и обладает хорошим понимаением силы героя, так же отлично расчитывает его Ультимейт и расход маны.'; // описание шторма
const qopDescr =
  'Артем так же имеет большой опыт и наигранность на "Квопе", хоть и на его канале ему регулярно припоминают моменты когда он ошибался, не попадая ультиметом. '; // описание квопы
const emberDescr =
  'Темыч регулярно играет на Эмбер Спирите, вне зависимости от силы и "меты" данного героя, аналогично с Shadow Fiend. В последнее время появился такой прикол как "а у меня Эмбер горит!" связанный с "баганным" и дорогим предметом на героя.'; // описание эмбера
const invoDescr =
  'Инвокер в пулле Артема так же давний герой, и Avice имеет очень хорошее понимание героя и его неочевидных сторон, которые не все "задроты" героя понимают. Так же он близко знаком с лучшим инвокером aka - mary_day.'; // описание вокера
const tinkerDescr =
  'на Тинкере Темыч стал значительно реже играть после реворка (rework) героя, но все так же показывает отличную игру, если позволяет возможность и есть желание взять героя в игре.'; // описание тинкера
const puckDescr =
  'На Паке Артем в еще после введения аспектов в dota стал играть крайне редко. Как он сам отвечал на вопрос "почему не играешь на паке?" - "потому что не в кайф играть с крученой орбой", это был своеобразный аспект на героя к которому надо было привыкать, и который не нравился Стримеру.   '; // описание пака

const responsiveHeroImage = (
  small: string,
  medium: string,
  large: string,
  full: string,
) => ({
  image: small,
  imageSrcSet: `${small} 480w, ${medium} 720w, ${large} 960w, ${full} 1440w`,
});

export const heroes: Hero[] = [
  {
    name: 'Morphling',
    description: morphDescr,
    theme: '#00c3ff',
    ...responsiveHeroImage(
      morphlingImageSmall,
      morphlingImageMedium,
      morphlingImageLarge,
      morphlingImageFull,
    ),
    featured: true,
  },
  {
    name: 'Shadow Fiend',
    description: sfDescr,
    theme: '#530000',
    ...responsiveHeroImage(
      shadowFiendImageSmall,
      shadowFiendImageMedium,
      shadowFiendImageLarge,
      shadowFiendImageFull,
    ),
  },
  {
    name: 'Storm Spirit',
    description: stormDescr,
    theme: '#003de6',
    ...responsiveHeroImage(
      stormSpiritImageSmall,
      stormSpiritImageMedium,
      stormSpiritImageLarge,
      stormSpiritImageFull,
    ),
  },
  {
    name: 'Invoker',
    description: invoDescr,
    theme: '#fb8eff',
    ...responsiveHeroImage(
      invokerImageSmall,
      invokerImageMedium,
      invokerImageLarge,
      invokerImageFull,
    ),
  },
  {
    name: 'Meepo',
    description: meepoDescr,
    theme: '#6f352a',
    ...responsiveHeroImage(
      meepoImageSmall,
      meepoImageMedium,
      meepoImageLarge,
      meepoImageFull,
    ),
  },
  {
    name: 'Tinker',
    description: tinkerDescr,
    theme: '#fcff67',
    ...responsiveHeroImage(
      tinkerImageSmall,
      tinkerImageMedium,
      tinkerImageLarge,
      tinkerImageFull,
    ),
  },
  {
    name: 'Queen Of Pain',
    description: qopDescr,
    theme: '#ff3535',
    ...responsiveHeroImage(
      queenOfPainImageSmall,
      queenOfPainImageMedium,
      queenOfPainImageLarge,
      queenOfPainImageFull,
    ),
  },
  {
    name: 'Ember Spirit',
    description: emberDescr,
    theme: '#ff701d',
    ...responsiveHeroImage(
      emberImageSmall,
      emberImageMedium,
      emberImageLarge,
      emberImageFull,
    ),
  },
  {
    name: 'Puck',
    description: puckDescr,
    theme: '#2ee7ff',
    ...responsiveHeroImage(
      puckImageSmall,
      puckImageMedium,
      puckImageLarge,
      puckImageFull,
    ),
  },
];
