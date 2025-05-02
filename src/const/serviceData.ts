import type {ImageMetadata} from "astro";
import tile1 from '../assets/homePage/cards/tile1.webp';
import tile2 from '../assets/homePage/cards/tile2.webp';
import tile3 from '../assets/homePage/cards/tile3.webp';
import tile4 from '../assets/homePage/cards/tile4.webp';
import tile5 from '../assets/homePage/cards/tile5.webp';
import tile6 from '../assets/homePage/cards/tile6.webp';
import tile7 from '../assets/homePage/cards/tile7.webp';
import tile8 from '../assets/homePage/cards/tile8.webp';
import tile9 from '../assets/homePage/cards/tile9.webp';

export interface ServiceOption {
  duration: number;
  price: string;
  isPopular?: boolean;
}

export interface ServiceItem {
  image: ImageMetadata;
  name: string;
  description?: string;
  options?: ServiceOption[];
  singlePrice?: string;
  singleDuration?: number;
  specialInfo?: string;
}

export const classicMassages: ServiceItem[] = [
  {
    image: tile1,
    name: "Klasická masáž",
    description: "Krátka masáž pre rýchlu regeneráciu",
    options: [
      {duration: 30, price: "€20"},
      {duration: 60, price: "€30", isPopular: true},
      {duration: 90, price: "€45"}
    ]
  },
  {
    image: tile2,
    name: "Športová masáž",
    description: "Overená klasika pre uvoľnenie tela aj mysle",
    singleDuration: 60,
    singlePrice: "€40"
  },
  {
    image: tile3,
    name: "Maderoterapia",
    description: "Hlboký relax bez kompromisov. Viac času, viac starostlivosti",
    singleDuration: 60,
    singlePrice: "€45"
  },
];

export const specialOffers: ServiceItem[] = [
  {
    image: tile5,
    name: "Pre firmy",
    description: "“Zdraví a spokojní zamestnanci, lepší výkon na pracovisku”",
    specialInfo: "Dohodou"
  },
  {
    image: tile6,
    name: "U vás doma",
    description: "“Relax až k vám - Oddýchnite si bez cestovania.”",
    specialInfo: "Dohodou"
  },
];

export const giftCards: ServiceItem[] = [
  {
    image: tile7,
    name: "MASÁŽ 1+1 ZDARMA",
    description: "Zdieľajte chvíľu pokoja - jedna masáž pre vás, druhá ako darček pre niekoho výnimočného",
    singlePrice: ""
  },
  {
    image: tile8,
    name: "DEŇ MATIEK",
    description: "Venujte svojej mame chvíľu čistého oddychu ♡",
    singlePrice: ""
  },
  {
    image: tile9,
    name: "Pripravujeme ďalšie prekvapenia",
    description: "",
    singlePrice: ""
  },
];
