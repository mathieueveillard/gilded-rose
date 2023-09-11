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
    this.items.forEach((item) => {
      switch (item.name) {
        case ItemsName.AgedBrie:
          this.updateItemQuality(item, true);
          break;
        case ItemsName.BackstagePasses:
          if (item.sellIn < 0) {
            item.quality = 0;
            break;
          }
          this.updateItemQuality(item, true);
          if (item.sellIn < 11) {
            this.updateItemQuality(item, true);
          }
          if (item.sellIn <= 5) {
            this.updateItemQuality(item, true);
          }
          break;
        case ItemsName.Sulfuras:
          item.quality = 80;
          break;
        case ItemsName.Conjured:
          this.updateItemQuality(item, false, 2);
          break;
        default:
          this.updateItemQuality(item, false);
          break;
      }
    });
    return this.items;
  }

  private updateItemQuality(item: Item, increas: boolean, value = 1) {
    increas
      ? (item.quality = item.quality < 50 ? item.quality + value : item.quality)
      : item.quality > 0
      ? item.quality - value
      : item.quality;
  }
}
