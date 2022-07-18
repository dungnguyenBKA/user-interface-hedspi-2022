import { useState, useEffect } from "react";
import { KPIMockData } from "./KPIMockData";

const STORAGE_KEY = "MKPIs";

function useStorage() {
  const [items, setItems] = useState(KPIMockData);
  useEffect(() => {
    const itemsFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (itemsFromStorage) {
      setItems(itemsFromStorage);
    }
  }, []);

  const putItems = (items) => {
    setItems(items);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  };

  const clearItems = () => {
    localStorage.removeItem(STORAGE_KEY);
    setItems([]);
  };

  return [items, putItems, clearItems];
}

export default useStorage;
