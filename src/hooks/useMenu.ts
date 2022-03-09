import { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { API_URL } from "../constants";
import { setMenu } from "../slices/menuSlice";
import { Category } from "../types/Category";
import { Item } from "../types/Item";

const useMenu = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        const categoriesFromResponse = data.extras.categories;

        // setting the categories in the local variable and returning it
        // as there is no need to store it in global store
        setCategories(
          Object.keys(categoriesFromResponse).map((category) => ({
            name: category,
            banner: categoriesFromResponse[category].bannerImage,
            icon: categoriesFromResponse[category].icon,
          }))
        );

        // setting the menu items in redux store
        dispatch(setMenu(data.menu as Item[]));
      } catch (e) {
        console.error(e);
      }
    }
    fetchMenu();
  }, []);

  return {
    categories,
  };
};

export default useMenu;
