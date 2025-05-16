import type {ImageMetadata} from "astro";
import firma from '../assets/cards/firmy.jpg';
import zdarma from '../assets/cards/masaz-zdarma.webp';
import klasika from '../assets/cards/klasicka-masaz.png';

import relaxCard from '../assets/cards/relaxacna-masaz.png'
import deepCard from '../assets/cards/sportova-masaz.jpg'
import sportCard from '../assets/cards/sportova-masaz.png'
import maderoCard from '../assets/cards/madero-masaz.jpg'
// import denMatiek from '../assets/cards/den-matiek.jpg'
import cardDoma from '../assets/cards/masaze-doma.png'
import comingSoon from '../assets/cards/pripravovane-novinky.png'
import darcekovyPoukaz from '../assets/cards/darcekovy-poukaz.png'

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
    image: klasika,
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
    options: [
      {duration: 30, price: "€20"},
      {duration: 60, price: "€30"},
      {duration: 90, price: "€45"}
    ]
  },
  {
    image: relaxCard,
    name: "Relaxačná masáž",
    description: "Uvoľnite telo i myseľ v príjemnej atmosfére",
    options: [
      {duration: 30, price: "€20"},
      {duration: 60, price: "€30"},
      {duration: 90, price: "€45"}
    ]
  },
  {
    image: deepCard,
    name: "Hĺbková masáž",
    description: "Intenzívna úľava a regenerácia v jednom",
    singleDuration: 60,
    singlePrice: "€35"
  },
  {
    image: maderoCard,
    name: "Maderoterapia",
    description: "Formovanie postavy s využitím drevených nástrojov",
    options: [
      {duration: 30, price: "€20"},
      {duration: 60, price: "€30"},
    ]
  },
];

export const specialOffers: ServiceItem[] = [
  {
    image: firma,
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
    image: zdarma,
    name: "MASÁŽ 1+1 ZDARMA",
    description: "Zdieľajte chvíľu pokoja - jedna masáž pre vás, druhá ako darček pre niekoho výnimočného. Platnosť akcie do 30.07.2025",
    singlePrice: ""
  },
  // {
  //   image: denMatiek,
  //   name: "DEŇ MATIEK | ZĽAVA -30%",
  //   description: "Venujte svojej mame chvíľu čistého oddychu ❤️",
  //   singlePrice: ""
  // },
  {
    image: darcekovyPoukaz,
    name: "DARČEKOVÝ POUKAZ NA MASÁŽ",
    description: "Darujte relax – 60 minút oddychu! Ideálny darček",
    singlePrice: ""
  },
  {
    image: comingSoon,
    name: "Pripravujeme ďalšie prekvapenia",
    description: "",
    singlePrice: ""
  },
];
