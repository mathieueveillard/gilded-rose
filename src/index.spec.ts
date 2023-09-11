import { GildedRose, Item } from ".";
import runGoldenMaster from "jest-golden-master";

describe("Gilded Rose", function () {
    it("Gilded Rose updateQuality without items", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose();

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one item", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Cheese", 0, 0)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one Aged Brie", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Aged Brie", 0, 0)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one Backstage passes to a TAFKAL80ETC concert", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0)]);

            gildedRose.updateQuality();
        });
    });

    it("Gilded Rose updateQuality with one Sulfuras, Hand of Ragnaros", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 0)]);

            gildedRose.updateQuality();
        });
    });


    it("Gilded Rose updateQuality with one item and quality > 0", function () {
        runGoldenMaster(async () => {
            const gildedRose = new GildedRose([
                new Item("Cheese", 0, 2),
            ]);

            gildedRose.updateQuality();
        });
    });
});