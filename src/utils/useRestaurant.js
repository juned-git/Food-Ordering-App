import { useState,useEffect } from "react";
import { FETCH_MENU } from "../config";

const useRestaurant = (id) => {
const [restaurant,setRestaurant] = useState(null);

useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.912185&lng=75.783304&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurant(json?.data);
    console.log('data',json?.data)
  }

  return restaurant;
}

export default useRestaurant;