export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      // logs pour afficher l'état avant update de la qualité
      console.log(`Item: ${item.name}, SellIn: ${item.sellIn}, Quality: ${item.quality}`);

      if (item.name === "Aged Brie") {
        if (item.quality < 50) {
          item.quality++;
        }
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        if (item.quality < 50) {
          item.quality++;
          if (item.sellIn < 11 && item.quality < 50) {
            item.quality++;
          }
          if (item.sellIn < 6 && item.quality < 50) {
            item.quality++;
          }
        }
        if (item.sellIn < 0) {
          item.quality = 0;
        }
      } else if (item.name !== "Sulfuras, Hand of Ragnaros") {
        if (item.quality > 0) {
          item.quality--;
        }
        if (item.sellIn < 0 && item.quality > 0) {
          item.quality--;
        }
      }

      // logs pour afficher l'état après update de la qualité
      console.log(`Updated - Item: ${item.name}, SellIn: ${item.sellIn}, Quality: ${item.quality}`);

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }
    }

    return this.items;
  }
}
