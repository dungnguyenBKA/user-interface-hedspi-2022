import { useState, useEffect } from "react";
import { jobDataRows } from "./KPIMockData";

const STORAGE_KEY = "JKPIs";

function useJobStorage(id) {
  const [items, setItems] = useState(jobDataRows);
  useEffect(() => {
    const itemsFromStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (itemsFromStorage) {
      setItems(itemsFromStorage);
    }
  }, []);
  useEffect(() => {
    const dataRows = jobDataRows.filter((element) => element.id === id);
    setItems(dataRows);
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

export default useJobStorage;
