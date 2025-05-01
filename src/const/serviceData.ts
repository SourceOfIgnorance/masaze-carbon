import type {Service} from './types/serviceTypes';

import tile1 from '../images/cards/tile1.webp'
import tile2 from '../images/cards/tile2.webp'
import tile3 from '../images/cards/tile3.webp'

import tile4 from '../images/cards/tile4.webp'
import tile5 from '../images/cards/tile5.webp'
import tile6 from '../images/cards/tile6.webp'
import tile7 from '../images/cards/tile7.webp'
import tile8 from '../images/cards/tile8.webp'
import tile9 from '../images/cards/tile9.webp'


export const classicMassages: Service[] = [
  {
    image: tile1,
    alt: "Krátka masáž",
    name: "30 minút",
    price: "€20",
    description: "Krátka masáž pre rýchlu regeneráciu",
  },
  {
    image: tile2,
    alt: "Klasická masáž",
    name: "60 minút",
    price: "€30",
    description: "Overená klasika pre uvoľnenie tela aj mysle",
  },
  {
    image: tile3,
    alt: "Dlhá masáž",
    name: "90 minút",
    price: "€45",
    description: "Hlboký relax bez kompromisov. Viac času, viac starostlivosti",
  },
  {
    image: tile4,
    alt: "Madero massage",
    name: "Madero 60 minút",
    price: "€30",
    description: "Hlboký relax bez kompromisov. Viac času, viac starostlivosti",
  },
];
export const specialOffers: Service[] = [
  {
    image: tile5,
    alt: "Corporate massage session",
    name: "Pre firmy",
    price: "Dohodou",
    description: "“Zdraví a spokojní zamestnanci, lepší výkon na pracovisku”",
  },
  {
    image: tile6,
    alt: "Massage at home",
    name: "U vás doma",
    price: "Dohodou",
    description: "“Relax až k vám - Oddýchnite si bez cestovania.”",
  },
];
export const giftCards: Service[] = [
  {
    image: tile7,
    alt: "Massage gift card 1+1 free",
    name: "MASÁŽ 1+1 ZDARMA",
    price: "",
    description: "Zdieľajte chvíľu pokoja - jedna masáž pre vás, druhá ako darček pre niekoho výnimočného",
  },
  {
    image: tile8,
    alt: "Mother's Day gift card",
    name: "DEŇ MATIEK",
    price: "",
    description: "Venujte svojej mame chvíľu čistého oddychu ♡",
  },
  {
    image: tile9,
    alt: "Upcoming surprise gift card",
    name: "Pripravujeme ďaľšie prekvapenie",
    price: "",
    description: "",
  },
];