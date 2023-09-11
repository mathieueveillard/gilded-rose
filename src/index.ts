export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;

    console.log("My item is : " + this.name + " and his sellIn is : " + this.sellIn + " and his quality is : " + this.quality);
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  decrease_quality(item: Item): void {
    if (item.quality <= 0) {
      return;
    }

    console.log("My item quality is greater than 0");

    if (item.name != "Sulfuras, Hand of Ragnaros") {
      console.log("My item is not Sulfuras, Hand of Ragnaros and loose 1 quality");

      this.items.find((element, index) => {
        if (element.name === item.name) {
          this.items[index].quality = this.items[index].quality - 1;
        }
      });

      console.log("My item quality is : " + item.quality);
    }
  }

  add_quality(item: Item): void {
    if (item.quality < 50) {
      console.log("My item quality is less than 50 and gain 1 quality");

      this.items.find((element, index) => {
        if (element.name === item.name) {
          this.items[index].quality = this.items[index].quality + 1;
        }
      });

      console.log("My item quality is : " + item.quality);
    }
  }

  update_quality_based_on_item_name(item: Item): void {
    console.log("My item sellIn is less than 0");

    if (item.name === "Aged Brie") {
      console.log("My item is Aged Brie");

      this.add_quality(item);

      return;
    }

    console.log("My item is not Aged Brie");

    if (item.name === "Backstage passes to a TAFKAL80ETC concert") {
      console.log("My item is Backstage passes to a TAFKAL80ETC concert and his quality is reduced to 0");

      this.items.find((element, index) => {
        if (element.name === item.name) {
          this.items[index].quality = this.items[index].quality - item.quality;
        }
      });

      console.log("My item quality is : " + item.quality);

      return;
    }

    console.log("My item is not Backstage passes to a TAFKAL80ETC concert");

    this.decrease_quality(item);
  }

  add_quality_based_on_sellIn(item: Item): void {
    if (item.sellIn < 11) {
      console.log("My item is Backstage passes to a TAFKAL80ETC concert and his sellIn is less than 11" + item.sellIn);

      this.add_quality(item);
    }

    if (item.sellIn < 6) {
      console.log("My item is Backstage passes to a TAFKAL80ETC concert and his sellIn is less than 6 : " + item.sellIn);

      this.add_quality(item);
    }
  }

  handle_quality_update_for_specific_items(item: Item): boolean {
    if (item.name !== "Aged Brie" && item.name !== "Backstage passes to a TAFKAL80ETC concert") {
      return false;
    }

    console.log("My item is Aged Brie or Backstage passes to a TAFKAL80ETC concert");

    const item_quality_pre_update = item.quality;

    this.add_quality(item);

    if (
      item.quality !== item_quality_pre_update
      && item.name === "Backstage passes to a TAFKAL80ETC concert"
    ) {
      console.log("My item is Backstage passes to a TAFKAL80ETC concert");

      this.add_quality_based_on_sellIn(item);
    }

    return true;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      console.log(this.items[i].name);

      const updated = this.handle_quality_update_for_specific_items(this.items[i]);

      if (updated === false) {
        console.log("My item is not Aged Brie or Backstage passes to a TAFKAL80ETC concert");

        this.decrease_quality(this.items[i]);
      }

      if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
        console.log("My item is not Sulfuras, Hand of Ragnaros and loose 1 sellIn");

        this.items[i].sellIn = this.items[i].sellIn - 1;

        console.log("My item sellIn is : " + this.items[i].sellIn);
      }

      if (this.items[i].sellIn >= 0) {
        continue;
      }

      this.update_quality_based_on_item_name(this.items[i]);
    }

    console.log("My items", this.items);

    return this.items;
  }
}
