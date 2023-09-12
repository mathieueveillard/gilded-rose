import { GildedRose } from "../GildedRose/gildedRose";
import { Item } from "../Items/item";
import { ItemType } from "../Enums/enum";


// si un article diminue deux fois plus rapidement une fois la date de vente passée.
test("Once the sell by date has passed, Quality degrades twice as fast", () => {
    const items = [new Item("Standard Item", 0, 20)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();
    
    expect(items).toMatchSnapshot();
  });
  
  // si la qualité d'un article ne devient jamais négative.
  test("The Quality of an item is never negative", () => {
    const items = [new Item("Standard Item", 10, 0)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();

    expect(items).toMatchSnapshot();

  });
  
  //si la qualité de l'article "Aged Brie" augmente à mesure qu'il vieillit.
  test("Aged Brie actually increases in Quality the older it gets", () => {
    const items = [new Item("Aged Brie", 10, 20)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();

    expect(items).toMatchSnapshot();

  });

  // si la qualité d'un article ne dépasse jamais la valeur de 50.
  test("The Quality of an item is never more than 50", () => {
    const items = [new Item("Standard Item", 10, 60)];
    const gildedRose = new GildedRose(items);
    gildedRose.updateQuality();

    expect(items).toMatchSnapshot();
 
  });
  