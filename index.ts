import { Item } from './items/item';
import { GildedRose } from './gilded-rose/gilded-rose';

const items = [
  new Item('Aged Brie', 10, 20),
  new Item('Backstage passes to a TAFKAL80ETC concert', 5, 15),
  new Item('Sulfuras, Hand of Ragnaros',6, 30 ),
];

const gildedRose = new GildedRose(items);

// Exécutez la mise à jour de la qualité
gildedRose.updateQuality();

// Affichez les résultats 
console.log(gildedRose.items);
