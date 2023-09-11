import { GildedRose, Item } from ".";
import runGoldenMaster from "jest-golden-master";

describe("Gilded Rose", function () {
  it("Doit diminuer la qualité et le sellIn pour les objets normaux", function () {
    runGoldenMaster(async () => {
      const objetNormal = new Item('Objet Normal', 5, 10);
      const gildedRose = new GildedRose([objetNormal]);

      gildedRose.updateQuality();
    });
  });

  it("Doit diminuer la qualité deux fois plus rapidement après la date de péremption pour les objets normaux", function () {
    runGoldenMaster(async () => {
      const objetNormal = new Item('Objet Normal', -1, 10);
      const gildedRose = new GildedRose([objetNormal]);

      gildedRose.updateQuality();
    });
  });

  it("Ne doit pas diminuer la qualité en dessous de zéro", function () {
    runGoldenMaster(async () => {
      const objetQualiteFaible = new Item('Objet Qualité Faible', 5, 0);
      const gildedRose = new GildedRose([objetQualiteFaible]);

      gildedRose.updateQuality();
    });
  });

  it("Doit augmenter la qualité pour Aged Brie", function () {
    runGoldenMaster(async () => {
      const agedBrie = new Item('Aged Brie', 5, 10);
      const gildedRose = new GildedRose([agedBrie]);

      gildedRose.updateQuality();
    });
  });

  it("Ne doit pas augmenter la qualité au-dessus de 50 pour Aged Brie", function () {
    runGoldenMaster(async () => {
      const agedBrie = new Item('Aged Brie', 5, 50);
      const gildedRose = new GildedRose([agedBrie]);

      gildedRose.updateQuality();
    });
  });

  it("Doit augmenter la qualité pour les Passes Backstage", function () {
    runGoldenMaster(async () => {
      const passesBackstage = new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20);
      const gildedRose = new GildedRose([passesBackstage]);

      gildedRose.updateQuality();
    });
  });

  it("Doit augmenter la qualité de 2 pour les Passes Backstage lorsque le sellIn est de 10 ou moins", function () {
    runGoldenMaster(async () => {
      const passesBackstage = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20);
      const gildedRose = new GildedRose([passesBackstage]);

      gildedRose.updateQuality();
    });
  });

  it("Doit augmenter la qualité de 3 pour les Passes Backstage lorsque le sellIn est de 5 ou moins", function () {
    runGoldenMaster(async () => {
      const passesBackstage = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20);
      const gildedRose = new GildedRose([passesBackstage]);

      gildedRose.updateQuality();
    });
  });

  it("Doit faire chuter la qualité à 0 pour les Passes Backstage après le concert", function () {
    runGoldenMaster(async () => {
      const passesBackstage = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20);
      const gildedRose = new GildedRose([passesBackstage]);

      gildedRose.updateQuality();
    });
  });

  it("Ne doit pas changer la qualité ni le sellIn pour Sulfuras", function () {
    runGoldenMaster(async () => {
      const sulfuras = new Item('Sulfuras, Hand of Ragnaros', 5, 80);
      const gildedRose = new GildedRose([sulfuras]);

      gildedRose.updateQuality();
    });
  });

  it("Doit augmenter la qualité si elle est inférieure à 50 pour un objet normal", function () {
    runGoldenMaster(async () => {
      const objetNormal = new Item('Objet Normal', -1, 49);
      const gildedRose = new GildedRose([objetNormal]);

      gildedRose.updateQuality();
    });
  });
});

