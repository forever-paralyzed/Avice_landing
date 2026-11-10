import emberImageSmall from '../assets/heroes/ember-480.webp';
import emberImageLarge from '../assets/heroes/ember-693.webp';
import invokerImageSmall from '../assets/heroes/invo-480.webp';
import invokerImageLarge from '../assets/heroes/invo-960.webp';
import meepoImageSmall from '../assets/heroes/meepo-320.webp';
import meepoImageLarge from '../assets/heroes/meepo-480.webp';
import morphlingImageSmall from '../assets/heroes/morph-480.webp';
import morphlingImageLarge from '../assets/heroes/morph-960.webp';
import puckImageSmall from '../assets/heroes/puck-480.webp';
import puckImageLarge from '../assets/heroes/puck-960.webp';
import queenOfPainImageSmall from '../assets/heroes/qop-480.webp';
import queenOfPainImageLarge from '../assets/heroes/qop-960.webp';
import shadowFiendImageSmall from '../assets/heroes/sf-480.webp';
import shadowFiendImageLarge from '../assets/heroes/sf-900.webp';
import stormSpiritImageSmall from '../assets/heroes/storm_spirit-480.webp';
import stormSpiritImageLarge from '../assets/heroes/storm_spirit-686.webp';
import tinkerImageSmall from '../assets/heroes/tinker-320.webp';
import tinkerImageLarge from '../assets/heroes/tinker-413.webp';

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

export const heroes: Hero[] = [
  {
    name: 'Morphling',
    description: morphDescr,
    theme: '#00c3ff',
    image: morphlingImageSmall,
    imageSrcSet: `${morphlingImageSmall} 480w, ${morphlingImageLarge} 960w`,
    featured: true,
  },
  {
    name: 'Shadow Fiend',
    description: sfDescr,
    theme: '#530000',
    image: shadowFiendImageSmall,
    imageSrcSet: `${shadowFiendImageSmall} 480w, ${shadowFiendImageLarge} 900w`,
  },
  {
    name: 'Storm Spirit',
    description: stormDescr,
    theme: '#003de6',
    image: stormSpiritImageSmall,
    imageSrcSet: `${stormSpiritImageSmall} 480w, ${stormSpiritImageLarge} 686w`,
  },
  {
    name: 'Invoker',
    description: invoDescr,
    theme: '#fb8eff',
    image: invokerImageSmall,
    imageSrcSet: `${invokerImageSmall} 480w, ${invokerImageLarge} 960w`,
  },
  {
    name: 'Meepo',
    description: meepoDescr,
    theme: '#6f352a',
    image: meepoImageSmall,
    imageSrcSet: `${meepoImageSmall} 320w, ${meepoImageLarge} 480w`,
  },
  {
    name: 'Tinker',
    description: tinkerDescr,
    theme: '#fcff67',
    image: tinkerImageSmall,
    imageSrcSet: `${tinkerImageSmall} 320w, ${tinkerImageLarge} 413w`,
  },
  {
    name: 'Queen Of Pain',
    description: qopDescr,
    theme: '#ff3535',
    image: queenOfPainImageSmall,
    imageSrcSet: `${queenOfPainImageSmall} 480w, ${queenOfPainImageLarge} 960w`,
  },
  {
    name: 'Ember Spirit',
    description: emberDescr,
    theme: '#ff701d',
    image: emberImageSmall,
    imageSrcSet: `${emberImageSmall} 480w, ${emberImageLarge} 693w`,
  },
  {
    name: 'Puck',
    description: puckDescr,
    theme: '#2ee7ff',
    image: puckImageSmall,
    imageSrcSet: `${puckImageSmall} 480w, ${puckImageLarge} 960w`,
  },
];
