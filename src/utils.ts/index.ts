import { Category } from "../types/Category";
import { Item } from "../types/Item";

export function convertDataToCategories(data: any): Category[] {
  return Object.keys(data).map((category) => ({
    name: category,
    banner: data[category].bannerImage,
    icon: data[category].icon,
  }));
}

export function convertDataToItems(data: any[]): Item[] {
  return data.map((entry) => ({
    category: entry.category,
    fooddescription: entry.fooddescription,
    foodid: entry.foodid,
    foodname: entry.foodname,
    imageurl: entry.imageurl,
    price: entry.price,
    sessionlist: entry.sessionlist,

    quantity: 0,
    session: null,
    note: "",
  }));
}

export function getTotalCostFromItems(items: Item[]) {
  let result = 0;
  items.forEach((item) => (result += item.quantity * item.price));
  return result;
}
