// export class Item {
//   name: string;
//   sellIn: number;
//   quality: number;

//   constructor(name, sellIn, quality) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
// }
import { Item } from "./Items/item"
export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  // updateQuality() {
  //   for (let i = 0; i < this.items.length; i++) {
  //     console.log(`Before update, ${this.items[i].name} has this quality : ${this.items[i].quality} and this sellin : ${this.items[i].sellIn}.`)
  //     // QualityRegularItem 1st condition
  //     if (this.items[i].name != "Aged Brie" && this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
  //       if (this.items[i].quality > 0) {
  //         if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //           this.items[i].quality = this.items[i].quality - 1;
  //           console.log(`This item : ${this.items[i].name} got removed 1 quality number and now has the following quality: ${this.items[i].quality}.`)
  //         }
  //       }
  //     } else {
  //       // QualityBackstage
  //       if (this.items[i].quality < 50) {
  //         if (this.items[i].name == "Backstage passes to a TAFKAL80ETC concert") {
  //           if (this.items[i].sellIn < 11) {
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 2;
  //               console.log(`This item : ${this.items[i]} got added 2 quality number and now has the following quality: ${this.items[i].quality}.`)
  //             }
  //           }
  //           if (this.items[i].sellIn < 6) {
  //             console.log(`${this.items[i].name}`)
  //             if (this.items[i].quality < 50) {
  //               this.items[i].quality = this.items[i].quality + 1;
  //               console.log(`This item : ${this.items[i].name} got added 1 quality number and now has the following quality: ${this.items[i].quality}.`)
  //             }
  //           }
  //         }
  //       }
  //     }
  //     // SellInItem
  //     if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //       this.items[i].sellIn = this.items[i].sellIn - 1;
  //       console.log(`This item : ${this.items[i].name} got removed 1 sellin number and now has the following sellin: ${this.items[i].sellIn}.`)
  //     }
  //     // QualityRegularItem 2nd condition
  //     if (this.items[i].sellIn < 0) {
  //       if (this.items[i].name != "Aged Brie") {
  //         if (this.items[i].name != "Backstage passes to a TAFKAL80ETC concert") {
  //           if (this.items[i].quality > 0) {
  //             if (this.items[i].name != "Sulfuras, Hand of Ragnaros") {
  //               this.items[i].quality = this.items[i].quality - 1;
  //               console.log(`This item : ${this.items[i].name} got removed 1 quality number and now has the following quality: ${this.items[i].quality}.`)
  //             }
  //           }
  //         } else {
  //           this.items[i].quality = this.items[i].quality - this.items[i].quality;
  //         }
  //       } else {
  //         // QualityAgedBrie
  //         if (this.items[i].quality < 50) {
  //           this.items[i].quality = this.items[i].quality + 1;
  //           console.log(`This item : ${this.items[i].name} got added 1 quality number and now has the following quality: ${this.items[i].quality}.`)
  //         }
  //       }
  //     }
  //     console.log(`After update, ${this.items[i].name} has this quality : ${this.items[i].quality} and this sellin : ${this.items[i].sellIn}.`)
  //   }

  //   return this.items;
  // }

  updateQuality(): Item[] {
    for (let item of this.items) {
      console.log(`Before update, ${item.name} has this quality : ${item.quality} and this sellin : ${item.sellIn}.`)
      this.QualityItem(item)
      console.log(`After update, ${item.name} has this quality : ${item.quality} and this sellin : ${item.sellIn}.`)
    }
    return this.items
  }

  private QualityItem(item: Item) {
    switch (item.name) {
      case "Aged Brie":
        this.QualityAgedBrie(item)
        break
      case "Backstage passes to a TAFKAL80ETC concert":
        this.QualityBackstagePasses(item)
        break
      case "Sulfuras, Hand of Ragnaros":
        // No quality or sellIn changes
        break
      default:
        this.QualityRegularItem(item)
    }

    this.SellInItem(item)
  }

  private QualityAgedBrie(item: Item) {
    if (item.quality < 50) {
      item.quality += 1
      console.log(`This item : ${item.name} got added 1 quality number and now has the following quality: ${item.quality}.`)
    }
  }

  private QualityBackstagePasses(item: Item) {
    if (item.sellIn > 5 && item.sellIn < 11 && item.quality < 50) {
      item.quality += 2
      console.log(`This item : ${item.name} got added 2 quality number and now has the following quality: ${item.quality}.`)
    }
    else if (item.sellIn > 0 && item.sellIn < 6 && item.quality < 50) {
      item.quality += 3
      console.log(`This item : ${item.name} got added 3 quality number and now has the following quality: ${item.quality}.`)
    } else if (item.sellIn <= 0){
      item.quality = 0
      console.log(`This item : ${item.name} got removed all quality number and now has the following quality: ${item.quality}.`)
    }
  }

  private QualityRegularItem(item: Item) {
    if (item.sellIn > 0 && item.quality > 0) {
      item.quality -= 1
      console.log(`This item : ${item.name} got removed 1 quality number and now has the following quality: ${item.quality}.`)
    } else if (item.sellIn <= 0 && item.quality > 0) {
      item.quality -= 2
      console.log(
        `This item : ${item.name} got removed 2 quality number after sellIn days ended and now has the following quality: ${item.quality}.`
      )
    }
  }

  private SellInItem(item: Item) {
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn -= 1
      console.log(`This item : ${item.name} got removed 1 sellIn day and now has the following sellIn: ${item.sellIn}.`)
    }
  }
}
