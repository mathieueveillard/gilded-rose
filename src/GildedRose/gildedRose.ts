import { Item } from "../Items/item";
import { ItemType, Quality, SellIn } from "../Enums/enum";

export class GildedRose {
  items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      console.log(`Before updateQuality: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);

      switch (item.name) {
        case ItemType.AgedBrie:
          this.updateAgedBrie(item);
          break;
        case ItemType.BackstagePasses:
          this.updateBackstagePasses(item);
          break;
        case ItemType.Sulfuras:
          break;
        default:
          this.updateStandardItem(item);
          break;
      }

      console.log(`After updateQuality: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);
    }

    return this.items;
  }

  private updateAgedBrie(item: Item) {
    console.log(`Before updateAgedBrie: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);

    item.sellIn -= 1;
    item.quality = Math.min(Quality.MAX, item.quality + Quality.INCREASE);

    console.log(`After updateAgedBrie: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);
  }

  private updateBackstagePasses(item: Item) {
    console.log(`Before updateBackstagePasses: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);

    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = Quality.MIN;
    } else if (item.sellIn <= SellIn.WARNING) {
      item.quality = Math.min(Quality.MAX, item.quality + Quality.INCREASE_DOUBLE);
    } else if (item.sellIn <= SellIn.SOON) {
      item.quality = Math.min(Quality.MAX, item.quality + Quality.INCREASE);
    }

    console.log(`After updateBackstagePasses: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);
  }

  private updateStandardItem(item: Item) {
    console.log(`Before updateStandardItem: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);
    
    item.sellIn -= 1;
    
    // Diminue la qualité deux fois plus rapidement si la date de vente est passée
    if (item.sellIn < 0) {
        item.quality = Math.max(Quality.MIN, item.quality - Quality.DECREASE * 2);
    } else {
        item.quality = Math.max(Quality.MIN, item.quality - Quality.DECREASE);
    }
    
    // Assurez-vous que la qualité ne dépasse pas 50
    if (item.quality > Quality.MAX) {
        item.quality = Quality.MAX;
    }

    console.log(`After updateStandardItem: name=${item.name}, sellIn=${item.sellIn}, quality=${item.quality}`);
}
}
