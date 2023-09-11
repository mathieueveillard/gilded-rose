export class Item {
  constructor(
    public name: string,
    public sellIn: number,
    public quality: number
  ) {}
}

export class GildedRose {
  constructor(public items: Item[] = []) {}

  updateQuality(): Item[] {
    for (let item of this.items) {
      this.QualityItem(item)
    }
    return this.items
  }

  private QualityItem(item: Item) {
    switch (item.name) {
      case "Aged Brie":
        this.QualityAgedBrie(item)
        break
      case "Backstage passes to a TAFKAL80ETC concert":
        this.QualityBackstagePass(item)
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

  private QualityBackstagePass(item: Item) {
    if (item.sellIn < 11 && item.quality < 50) {
      item.quality += 1
    }
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality += 1
    }
    if (item.sellIn <= 0) {
      item.quality = 0
    }
  }

  private QualityRegularItem(item: Item) {
    if (item.quality > 0) {
      item.quality -= 1
      console.log(`This item : ${item.name} got removed 1 quality number and now has the following quality: ${item.quality}.`)
    }
    if (item.sellIn < 0 && item.quality > 0) {
      item.quality -= 1
      console.log(
        `This item : ${item.name} got removed 1 quality number after sellIn days ended and now has the following quality: ${item.quality}.`
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
