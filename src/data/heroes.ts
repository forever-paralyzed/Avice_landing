import emberImage from '../assets/heroes/ember.png';
import invokerImage from '../assets/heroes/invo.jpg';
import meepoImage from '../assets/heroes/meepo.jpg';
import morphlingImage from '../assets/heroes/morph.jpg';
import puckImage from '../assets/heroes/puck.png';
import queenOfPainImage from '../assets/heroes/qop.jpg';
import shadowFiendImage from '../assets/heroes/sf.png';
import stormSpiritImage from '../assets/heroes/storm_spirit.jpg';
import tinkerImage from '../assets/heroes/tinker.png';

export type Hero = {
  name: string;
  description: string;
  theme: string;
  image: string | null;
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
    image: morphlingImage,
    featured: true,
  },
  {
    name: 'Shadow Fiend',
    description: sfDescr,
    theme: '#530000',
    image: shadowFiendImage,
  },
  {
    name: 'Storm Spirit',
    description: stormDescr,
    theme: '#003de6',
    image: stormSpiritImage,
  },
  {
    name: 'Invoker',
    description: invoDescr,
    theme: '#fb8eff',
    image: invokerImage,
  },
  {
    name: 'Meepo',
    description: meepoDescr,
    theme: '#6f352a',
    image: meepoImage,
  },
  {
    name: 'Tinker',
    description: tinkerDescr,
    theme: '#fcff67',
    image: tinkerImage,
  },
  {
    name: 'Queen Of Pain',
    description: qopDescr,
    theme: '#ff3535',
    image: queenOfPainImage,
  },
  {
    name: 'Ember Spirit',
    description: emberDescr,
    theme: '#ff701d',
    image: emberImage,
  },
  {
    name: 'Puck',
    description: puckDescr,
    theme: '#2ee7ff',
    image: puckImage,
  },
];
