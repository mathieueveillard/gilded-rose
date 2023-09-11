export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality() {
    for (let item of this.items) {
      switch (item.name) {
        case "Aged Brie":
          if (item.quality < 50) {
            item.quality += 1
            console.log(`This item : ${item.name} got added 1 quality number and now has the following quality: ${item.quality}.`)
          }
          break

        case "Backstage passes to a TAFKAL80ETC concert":
          if (item.sellIn < 11 && item.quality < 50) {
            item.quality += 1
          }
          if (item.sellIn < 6 && item.quality < 50) {
            item.quality += 1
          }
          if (item.sellIn <= 0) {
            item.quality = 0
          }
          break

        case "Sulfuras, Hand of Ragnaros":
          // No quality or sellIn changes
          continue

        default:
          if (item.quality > 0) {
            item.quality -= 1
            console.log(`This item : ${item.name} got removed 1 quality number and now has the following quality: ${item.quality}.`)
          }
      }

      if (item.name !== "Sulfuras, Hand of Ragnaros") {
        item.sellIn -= 1
        console.log(`This item : ${item.name} got removed 1 sellIn day and now has the following sellIn: ${item.sellIn}.`)
      }

      if (item.sellIn < 0 && item.name !== "Aged Brie" && item.name !== "Backstage passes to a TAFKAL80ETC concert" && item.quality > 0) {
        item.quality -= 1
        console.log(
          `This item : ${item.name} got removed 1 quality number after sellIn days ended and now has the following quality: ${item.quality}.`
        )
      }
    }

    return this.items
  }
}
