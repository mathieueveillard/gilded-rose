const MAX_QUALITY = 50;

export class Item {
  constructor(public name: string, public sellIn: number, public quality: number) {}
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < MAX_QUALITY) {
      item.quality += 1;
    }
  }

  private updateBackstagePasses(item: Item) {
    if (item.quality < MAX_QUALITY) {
      item.quality += 1;
      if (item.sellIn < 11 && item.quality < MAX_QUALITY) {
        item.quality += 1;
      }
      if (item.sellIn < 6 && item.quality < MAX_QUALITY) {
        item.quality += 1;
      }
    }
  }

  updateQuality() {
    for (const item of this.items) {
      if (item.name === "Aged Brie") {
        this.updateAgedBrie(item);
      } else if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
        this.updateBackstagePasses(item);
      } else if (item.name !== "Sulfuras, Hand of Ragnaros") {
        this.updateNormalItem(item);
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn -= 1;
      }
    }
    return this.items;
  }
}
