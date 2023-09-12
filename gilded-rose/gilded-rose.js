"use strict";
// gilded-rose.ts (dans le dossier "gilded-rose")
Object.defineProperty(exports, "__esModule", { value: true });
exports.GildedRose = void 0;
var GildedRose = /** @class */ (function () {
    function GildedRose(items) {
        if (items === void 0) { items = []; }
        this.items = items;
    }
    GildedRose.prototype.isLegendary = function (item) {
        return item.name === "Sulfuras, Hand of Ragnaros";
    };
    GildedRose.prototype.isAgedBrie = function (item) {
        return item.name === "Aged Brie";
    };
    GildedRose.prototype.isBackstagePass = function (item) {
        return item.name === "Backstage passes to a TAFKAL80ETC concert";
    };
    GildedRose.prototype.updateQualityForNormalItem = function (item) {
        if (item.quality > 0) {
            item.quality -= 1;
        }
    };
    GildedRose.prototype.updateQualityForAgedBrie = function (item) {
        if (item.quality < 50) {
            item.quality += 1;
        }
    };
    GildedRose.prototype.updateQualityForBackstagePass = function (item) {
        if (item.quality < 50) {
            item.quality += 1;
            if (item.sellIn < 11 && item.quality < 50) {
                item.quality += 1;
            }
            if (item.sellIn < 6 && item.quality < 50) {
                item.quality += 1;
            }
        }
    };
    GildedRose.prototype.updateQuality = function () {
        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];
            if (!this.isLegendary(item)) {
                if (this.isAgedBrie(item)) {
                    this.updateQualityForAgedBrie(item);
                }
                else if (this.isBackstagePass(item)) {
                    this.updateQualityForBackstagePass(item);
                }
                else {
                    this.updateQualityForNormalItem(item);
                }
                if (!this.isAgedBrie(item) && !this.isBackstagePass(item)) {
                    item.sellIn -= 1;
                    if (item.sellIn < 0) {
                        if (!this.isAgedBrie(item)) {
                            if (!this.isBackstagePass(item) && item.quality > 0) {
                                item.quality -= 1;
                            }
                            else {
                                item.quality = 0;
                            }
                        }
                        else {
                            this.updateQualityForAgedBrie(item);
                        }
                    }
                }
            }
        }
        return this.items;
    };
    return GildedRose;
}());
exports.GildedRose = GildedRose;
