import ResturanntCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.912185&lng=75.783304&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    let cardsToRender = json.data.cards.map((card) => {
      const dataToRender =
        card.card.card?.gridElements?.infoWithStyle?.restaurants;
      if (dataToRender) return dataToRender;
    });

    const twoDCardsArray = cardsToRender.filter((dataTocheck) => {
      return dataTocheck !== undefined;
    });

    const cards = twoDCardsArray.flat();

    const uniqueCards = [...cards];

    uniqueCards.forEach((card, index) => {
      uniqueCards.forEach((uniqueCard) => {
          if (uniqueCard.info.id === card.info.id) {
            cards.splice(index, 1);
          }
        });
      
    });


    setAllRestaurants(cards);
    setFilteredRestaurants(cards);
  }
  const onChangeInput = (e) => {
    setsearchText(e.target.value);
  };
  const searchedRestaurant = () => {
    const data = filterData(searchText, allRestaurants);
    setFilteredRestaurants(data);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴please check your internet connections</h1>;
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex w-full bg-pink-100 py-3 my-4 md:px-5">
        <input
          type="text"
          placeholder="search"
          className=" md:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:ml-9"
          value={searchText}
          onChange={onChangeInput}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              searchedRestaurant();
            }
          }}
        />
        <button
          className=" bg-purple-900 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded ml-3"
          onClick={searchedRestaurant}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap mx-5 my-4">
        {filteredRestaurants.length === 0 ? (
          <h1 style={{ margin: "12px" }}>No restaurant found...</h1>
        ) : (
          filteredRestaurants.map((restaurant) => {
            return (
              <ResturanntCard
                restaurant={restaurant}
                key={restaurant.info.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
