import { TableColumn, displayedItem } from 'index.interface';
import agedBrie from 'assets/aged-brie.jpg';
import sulfuras from 'assets/sulfuras.jpg';
import backstagePass from 'assets/backstage-pass.jpg';
import elixir from 'assets/elixir.jpg';
import dexterityVest from 'assets/dexterity-vest.jpg';
import manaCake from 'assets/mana-cake.jpg';

export const defaultItemsList: displayedItem[] = [
  { id: 1, name: 'Aged Brie', sellIn: 2, quality: 0, image: agedBrie },
  {
    id: 2,
    name: 'Sulfuras, Hand of Ragnaros',
    sellIn: 0,
    quality: 80,
    image: sulfuras,
  },
  {
    id: 3,
    name: 'Backstage passes to a TAFKAL80ETC concert',
    sellIn: 15,
    quality: 20,
    image: backstagePass,
  },
  {
    id: 4,
    name: 'Elixir of the Mongoose',
    sellIn: 5,
    quality: 7,
    image: elixir,
  },
  {
    id: 5,
    name: '+5 Dexterity Vest',
    sellIn: 10,
    quality: 20,
    image: dexterityVest,
  },
  {
    id: 6,
    name: 'Conjured Mana Cake',
    sellIn: 3,
    quality: 6,
    image: manaCake,
  },
];

export const columns: TableColumn[] = [
  { id: 1, field: 'name', title: 'Name' },
  { id: 2, field: 'sellIn', title: 'Sell In' },
  { id: 3, field: 'quality', title: 'Quality' },
];
