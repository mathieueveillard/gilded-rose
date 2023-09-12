import { Item } from "../Entity/item"

class ItemQuality {
  constructor(private item: Item) {}

  public AgedBrie() {
    if (this.item.quality < 50) {
      this.item.quality += 1
      console.log(`This item : ${this.item.name} got added 1 quality number and now has the following quality: ${this.item.quality}.`)
    }
  }

  public BackstagePasses() {
    if (this.item.sellIn > 10 && this.item.quality < 50) {
      this.item.quality += 1
      console.log(`This item : ${this.item.name} got added 1 quality number and now has the following quality: ${this.item.quality}.`)
    } else if (this.item.sellIn > 5 && this.item.sellIn <= 10 && this.item.quality < 50) {
      this.item.quality += 2
      console.log(`This item : ${this.item.name} got added 2 quality number and now has the following quality: ${this.item.quality}.`)
    } else if (this.item.sellIn > 0 && this.item.sellIn <= 5 && this.item.quality < 50) {
      this.item.quality += 3
      console.log(`This item : ${this.item.name} got added 3 quality number and now has the following quality: ${this.item.quality}.`)
    } else if (this.item.sellIn <= 0) {
      this.item.quality = 0
      console.log(
        `This item : ${this.item.name} got removed all quality number and now has the following quality: ${this.item.quality}.`
      )
    }
  }

  public RegularItem() {
    if (this.item.sellIn > 0 && this.item.quality > 0) {
      this.item.quality -= 1
      console.log(
        `This item : ${this.item.name} got removed 1 quality number and now has the following quality: ${this.item.quality}.`
      )
    } else if (this.item.sellIn <= 0 && this.item.quality > 0) {
      this.item.quality -= 2
      console.log(
        `This item : ${this.item.name} got removed 2 quality number after sellIn days ended and now has the following quality: ${this.item.quality}.`
      )
    }
  }

  public ConjuredItem() {
    if (this.item.sellIn > 0 && this.item.quality > 0) {
      this.item.quality -= 2
      console.log(
        `This item : ${this.item.name} got removed 1 quality number and now has the following quality: ${this.item.quality}.`
      )
    } else if (this.item.sellIn <= 0 && this.item.quality > 0) {
      this.item.quality -= 4
      console.log(
        `This item : ${this.item.name} got removed 2 quality number after sellIn days ended and now has the following quality: ${this.item.quality}.`
      )
    }
  }

}

export default ItemQuality
