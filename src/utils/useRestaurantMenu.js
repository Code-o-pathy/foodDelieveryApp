import React from "react";
import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const finalData = await data.json();
    // console.log("finaldata",finalData);
    setResInfo(finalData);
  };
  return resInfo;
};

export default useRestaurantMenu;
