import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const { id } = useParams();

  //   const [restaurant, setRestaurant] = useState();

  const restaurant = useRestaurant(id);

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    let restaurantCards;
    restaurant?.cards?.forEach((card) => {
      if (card?.groupedCard) {
        restaurantCards = card?.groupedCard;
      }
    });

    const arrayOfCards = restaurantCards?.cardGroupMap?.REGULAR?.cards?.map(
      (card) => {
        return card.card.card.itemCards;
      }
    );
    const filteredCards = arrayOfCards?.filter((card) => card !== undefined);

    const menu = filteredCards
      ?.flat()
      .flat()
      .map((card) => card.card.info.name);

    setMenu(menu);
  }, [restaurant]);
  
  //Write a program return resolve if value is less than 5 using Promise

  // Write a program to multiply two number without using multiply Sign in Javascript

  return (
    <div className="selected-item-container">
      <div>
        <h1>{restaurant?.cards[0].card.card.info.name}</h1>
        <img
          src={
            IMG_CDN_URL + restaurant?.cards[0].card.card.info.cloudinaryImageId
          }
          alt="image"
          className="selected-image"
        />
        <h3>{restaurant?.cards[0].card.card.info.areaName}</h3>
        <h3>{restaurant?.cards[0].card.card.info.city}</h3>
        <h3>{restaurant?.cards[0].card.card.info.avgRatingString} stars</h3>
        <h3>{restaurant?.cards[0].card.card.info.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>

        <ul>
          {menu?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
