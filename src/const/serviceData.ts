import type {ImageMetadata} from "astro";
import tile3 from '../assets/cards/tile3.webp';
import tile4 from '../assets/cards/tile4.webp';
import tile6 from '../assets/cards/tile6.webp';

import deepCard from '../assets/cards/deepCard.webp'
import sportCard from '../assets/cards/sportCard.jpg'
import maderoCard from '../assets/cards/maderoCard.jpg'
import next from '../assets/cards/next.jpg'
import cardDoma from '../assets/cards/cardDoma-800.webp'
import comingSoon from '../assets/cards/comingSoon.png'

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
    image: tile6,
    name: "Klasická masáž",
    description: "Overená klasika pre uvoľnenie tela aj mysle",
    options: [
      {duration: 30, price: "€20"},
      {duration: 60, price: "€30", isPopular: true},
      {duration: 90, price: "€45"}
    ]
  },
  {
    image: sportCard,
    name: "Športová masáž",
    description: "Vhodná pre aktívnych ľudí pred aj po športovom výkone",
    singleDuration: 60,
    singlePrice: "€40"
  },
  {
    image: deepCard,
    name: "Hĺbková masáž",
    description: "Intenzívne uvoľnenie a regenerácia na odbúranie stresu",
    singleDuration: 60,
    singlePrice: "€35"
  },
  {
    image: maderoCard,
    name: "Maderoterapia",
    description: "Formovanie postavy s využitím drevených nástrojov",
    singleDuration: 60,
    singlePrice: "€45"
  },
];

export const specialOffers: ServiceItem[] = [
  {
    image: tile3,
    name: "Pre firmy",
    description: "“Zdraví a spokojní zamestnanci, lepší výkon na pracovisku”",
    specialInfo: "Dohodou"
  },
  {
    image: cardDoma,
    name: "U vás doma",
    description: "“Relax až k vám - oddýchnite si bez cestovania.”",
    specialInfo: "Dohodou"
  },
];

export const giftCards: ServiceItem[] = [
  {
    image: tile4,
    name: "MASÁŽ 1+1 ZDARMA",
    description: "Zdieľajte chvíľu pokoja - jedna masáž pre vás, druhá ako darček pre niekoho výnimočného",
    singlePrice: ""
  },
  {
    image: next,
    name: "DEŇ MATIEK",
    description: "Venujte svojej mame chvíľu čistého oddychu ❤️",
    singlePrice: ""
  },
  {
    image: comingSoon,
    name: "Pripravujeme ďalšie prekvapenia",
    description: "",
    singlePrice: ""
  },
];
