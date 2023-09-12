// transpiler en JavaScript avant de les exécuter avec Node.js 

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var item_1 = require("./items/item");
var gilded_rose_1 = require("./gilded-rose/gilded-rose");
var items = [
    new item_1.Item('Aged Brie', 10, 20),
    new item_1.Item('Backstage passes to a TAFKAL80ETC concert', 5, 15),
    new item_1.Item('Sulfuras, Hand of Ragnaros',6, 30 ),
];
var gildedRose = new gilded_rose_1.GildedRose(items);
// Exécutez la mise à jour de la qualité
gildedRose.updateQuality();
// Affichez les résultats 
for (var _i = 0, _a = gildedRose.items; _i < _a.length; _i++) {
    var item = _a[_i];
    console.log("Name: ".concat(item.name, ", SellIn: ").concat(item.sellIn, ", Quality: ").concat(item.quality));
}
// console.log(gildedRose.items);
