export interface Item {
  category: string;
  fooddescription: string;
  foodid: string;
  foodname: string;
  imageurl: string;
  price: number;
  sessionlist: Array<string>;

  // derived from the UI
  quantity: number;
  session: string | null;
  note: string;
}
