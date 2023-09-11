export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality(): Array<Item> {
    this.items.forEach(item => {
      switch (item.name) {
        case "Aged Brie":
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          this.updateBackstagePasses(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          // Do nothing for Sulfuras as its quality and sellIn don't change.
          break;
        default:
          this.updateNormalItem(item);
          break;
      }
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn--;
      }
    });

    return this.items;
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality++;
    }
    if (item.sellIn < 0 && item.quality < 50) {
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
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
  }

  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      item.quality--;
    }
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality--;
    }
  }
}
