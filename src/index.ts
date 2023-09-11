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
      console.log(`Processing item: ${this.items[i].name} with sellIn: ${this.items[i].sellIn} and quality: ${this.items[i].quality}`);

      if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
        console.log('Item is not Aged Brie and not Backstage passes');
        if (this.items[i].quality > 0) {
          console.log('Item quality is greater than 0');
          if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
            console.log('Item is not Sulfuras, reducing quality by 1');
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        console.log('Item is either Aged Brie or Backstage passes');
        if (this.items[i].quality < 50) {
          console.log('Item quality is less than 50');
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
            console.log('Item is Backstage passes');
            if (this.items[i].sellIn < 11) {
              console.log('SellIn is less than 11');
              if (this.items[i].quality < 50) {
                console.log('Increasing quality by 1');
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              console.log('SellIn is less than 6');
              if (this.items[i].quality < 50) {
                console.log('Increasing quality by 1 again');
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        console.log('Item is not Sulfuras, reducing sellIn by 1');
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        console.log('Item sellIn is negative');
        if (this.items[i].name != "Aged Brie") {
          console.log('Item is not Aged Brie');
          if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
            console.log('Item is not Backstage passes');
            if (this.items[i].quality > 0) {
              console.log('Item quality is greater than 0');
              if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
                console.log('Item is not Sulfuras, reducing quality by 1');
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            console.log('Setting Backstage passes quality to 0 after concert');
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          console.log('Item is Aged Brie');
          if (this.items[i].quality < 50) {
            console.log('Increasing quality of Aged Brie by 1');
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
