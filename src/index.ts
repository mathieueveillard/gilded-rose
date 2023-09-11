enum ItemsName {
  AgedBrie = "Aged Brie",
  BackstagePasses = "Backstage passes to a TAFKAL80ETC concert",
  Sulfuras = "Sulfuras, Hand of Ragnaros",
  Conjured = "Conjured Mana Cake",
}

export class Item {
  name: ItemsName;
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
    this.items.forEach((item: Item) => {
      switch (item.name) {
        case ItemsName.AgedBrie:
          console.log('process AgedBrie');
          this.updateItemQuality(item, true, item.sellIn <= 0 ? 2 : 1);
          break;
        case ItemsName.BackstagePasses:
          console.log('process BackstagePasses');
          if (item.sellIn <= 0) {
            item.quality = 0;
            break;
          }
          const value = item.sellIn <= 5 ? 3 : item.sellIn <= 10 ? 2 : 1;
          this.updateItemQuality(item, true, value);
          break;
        case ItemsName.Sulfuras:
          console.log('process Sulfuras');
          item.quality = 80;
          break;
        case ItemsName.Conjured:
          console.log('process Conjured');
          this.updateItemQuality(item, false, 2);
          break;
        default:
          console.log('process default');
          this.updateItemQuality(item, false, item.sellIn <= 0 ? 2 : 1);
          break;
      }
      console.log('update sellIn');
      item.name !== ItemsName.Sulfuras && item.sellIn--;
    });
    return this.items;
  }

  private updateItemQuality(item: Item, increaseQuality: boolean, value = 1) {
    console.log(`${increaseQuality ? 'increase' : 'decrease'} item quality by ${value}`);
    if (increaseQuality) {
      item.quality = Math.min(50, item.quality + value);
    } else {
      item.quality = Math.max(0, item.quality - value);
    }
  }
}
