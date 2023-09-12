// export class Item {
//   name: string
//   sellIn: number
//   quality: number

//   constructor(name, sellIn, quality) {
//     this.name = name
//     this.sellIn = sellIn
//     this.quality = quality
//   }
// }
import { Item } from "./Items/index"
import Quality from "./Quality/index"
export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }
  
  updateItem(): Item[] {
    for (let item of this.items) {
      console.log(`Before update, ${item.name} has this quality : ${item.quality} and this sellin : ${item.sellIn}.`)
      this.QualityItem(item)
      console.log(`After update, ${item.name} has this quality : ${item.quality} and this sellin : ${item.sellIn}.`)
    }
    return this.items
  }

  private QualityItem(item: Item) {

    const quality = new Quality(item)

    switch (item.name) {
      case "Aged Brie":
        quality.QualityAgedBrie()
        break
      case "Backstage passes to a TAFKAL80ETC concert":
        quality.QualityBackstagePasses()
        break
      case "Sulfuras, Hand of Ragnaros":
        // No quality or sellIn changes
        break
      default:
        quality.QualityRegularItem()
    }

    this.SellInItem(item)
  }

  private SellInItem(item: Item) {
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn -= 1
      console.log(`This item : ${item.name} got removed 1 sellIn day and now has the following sellIn: ${item.sellIn}.`)
    }
  }
}
