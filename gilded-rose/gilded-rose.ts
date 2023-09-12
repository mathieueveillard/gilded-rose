// gilded-rose.ts (dans le dossier "gilded-rose")

import { Item } from '../items/item';

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  private isLegendary(item: Item): boolean {
    return item.name === "Sulfuras, Hand of Ragnaros";
  }

  private isAgedBrie(item: Item): boolean {
    return item.name === "Aged Brie";
  }

  private isBackstagePass(item: Item): boolean {
    return item.name === "Backstage passes to a TAFKAL80ETC concert";
  }

  private updateQualityForNormalItem(item: Item): void {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }

  private updateQualityForAgedBrie(item: Item): void {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  private updateQualityForBackstagePass(item: Item): void {
    if (item.quality < 50) {
      item.quality += 1;

      if (item.sellIn < 11 && item.quality < 50) {
        item.quality += 1;
      }

      if (item.sellIn < 6 && item.quality < 50) {
        item.quality += 1;
      }
    }
  }

  updateQuality(): Item[] {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (!this.isLegendary(item)) {
        if (this.isAgedBrie(item)) {
          this.updateQualityForAgedBrie(item);
        } else if (this.isBackstagePass(item)) {
          this.updateQualityForBackstagePass(item);
        } else {
          this.updateQualityForNormalItem(item);
        }

        if (!this.isAgedBrie(item) && !this.isBackstagePass(item)) {
          item.sellIn -= 1;

          if (item.sellIn < 0) {
            if (!this.isAgedBrie(item)) {
              if (!this.isBackstagePass(item) && item.quality > 0) {
                item.quality -= 1;
              } else {
                item.quality = 0;
              }
            } else {
              this.updateQualityForAgedBrie(item);
            }
          }
        }
      }
    }

    return this.items;
  }
}
