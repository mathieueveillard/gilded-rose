import { Item } from "./Entity/item"
import ItemQuality from "./ItemQuality/index"
export class GildedRose {
  items: Array<Item>

  constructor(items = [] as Array<Item>) {
    this.items = items
  }

  updateItem(): Item[] {
    for (let item of this.items) {
      console.log(`Before update, ${item.name} has this quality : ${item.quality} and this sellin : ${item.sellIn}.`)
      this.updateQuality(item)
      console.log(`After update, ${item.name} has this quality : ${item.quality} and this sellin : ${item.sellIn}.`)
    }
    return this.items
  }

  private updateQuality(item: Item) {
    const itemQuality = new ItemQuality(item)

    switch (item.name) {
      case "Aged Brie":
        itemQuality.AgedBrie()
        break
      case "Backstage passes to a TAFKAL80ETC concert":
        itemQuality.BackstagePasses()
        break
      case "Sulfuras, Hand of Ragnaros":
        item.quality = 80
        break
      case "Conjured Item":
        itemQuality.ConjuredItem()
        break
      default:
        itemQuality.RegularItem()
    }

    this.updateSellIn(item)
  }

  private updateSellIn(item: Item) {
    if (item.name !== "Sulfuras, Hand of Ragnaros") {
      item.sellIn -= 1
      console.log(`This item : ${item.name} got removed 1 sellIn day and now has the following sellIn: ${item.sellIn}.`)
    }
  }
}
