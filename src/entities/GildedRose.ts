import Item from './Item';

class GildedRose {
  private readonly _items: Array<Item>;

  constructor(items: Array<Item> = []) {
    this._items = items;
  }

  get items(): Array<Item> {
    return this._items;
  }

  public updateQuality(): Array<Item> {
    this._items.forEach(item => {
      console.log(`Processing item: ${item.name} with sellIn: ${item.sellIn} and quality: ${item.quality}`);

      // Reduce sellIn first for all items except Sulfuras
      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        console.log('Item is not Sulfuras, reducing sellIn by 1');
        item.sellIn--;
      }

      switch (item.name) {
        case "Aged Brie":
          console.log('Item is Aged Brie');
          this.updateAgedBrie(item);
          break;
        case "Backstage passes to a TAFKAL80ETC concert":
          console.log('Item is Backstage passes');
          this.updateBackstagePasses(item);
          break;
        case "Sulfuras, Hand of Ragnaros":
          console.log('Item is Sulfuras, no change required');
          break;
        case "Conjured":
          console.log('Item is Conjured');
          this.updateConjuredItem(item);
          break;
        default:
          console.log('Item is a regular item');
          this.updateNormalItem(item);
          break;
      }

      // Ensure quality remains within valid bounds
      if (item.quality < 0) item.quality = 0;
      if (item.quality > 50 && item.name !== "Sulfuras, Hand of Ragnaros") item.quality = 50;
    });

    return this._items;
  }

  private updateAgedBrie(item: Item) {
    if (item.quality < 50) {
      console.log('Increasing quality by 1 for Aged Brie');
      item.quality++;
    }
    if (item.sellIn < 0 && item.quality < 50) {
      console.log('SellIn is negative, increasing quality by 1 again for Aged Brie');
      item.quality++;
    }
  }

  private updateBackstagePasses(item: Item) {
    if (item.quality < 50) {
      console.log('Increasing quality by 1 for Backstage passes');
      item.quality++;
      if (item.sellIn < 11 && item.quality < 50) {
        console.log('SellIn is less than 11, increasing quality by 1 again');
        item.quality++;
      }
      if (item.sellIn < 6 && item.quality < 50) {
        console.log('SellIn is less than 6, increasing quality by 1 once more');
        item.quality++;
      }
    }
    if (item.sellIn < 0) {
      console.log('Setting Backstage passes quality to 0 after concert');
      item.quality = 0;
    }
  }

  private updateNormalItem(item: Item) {
    if (item.quality > 0) {
      console.log('Reducing quality by 1 for regular item');
      item.quality--;
    }
    if (item.sellIn < 0 && item.quality > 0) {
      console.log('SellIn is negative, reducing quality by 1 again for regular item');
      item.quality--;
    }
  }

  private updateConjuredItem(item: Item) {
    if (item.quality > 0) {
      console.log('Reducing quality by 2 for Conjured item');
      item.quality -= 2;
    }
    if (item.sellIn < 0 && item.quality > 0) {
      console.log('SellIn is negative, reducing quality by 2 again for Conjured item');
      item.quality -= 2;
    }
    if (item.quality < 0) {
      console.log('Quality is negative, setting it to 0');
      item.quality = 0;  // Ensure quality is never negative
    }
  }
}

export default GildedRose;
