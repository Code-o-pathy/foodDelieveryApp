import React from "react";
import { useState } from "react";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import ItemCard from "./ItemCard";
import RestaurantCategory from "./RestaurantCategory";
const MenuCard = () => {
  // const [menuCard, setMenuCard] = useState([]);  dont know why this gives too many re render errors
  const params = useParams();
  const resId = params.resId;
  const [showIndex, setShowIndex] = useState(0);

  //the below is for fetching data using resId, its a custom hook. It is created inorder to align with single responsibility principle too.
  const resInfo = useRestaurantMenu(resId);
  // console.log("resInfo");
  // console.log(resInfo);

  if (resInfo === null) {
    return <Shimmer />;
  }
  // const { name, areaName,id } = resInfo?.info;
  // console.log(name+" "+areaName+" "+id)

  const resInformation = resInfo.data.cards[2].card.card.info;
  const {
    name,
    areaName,
    id,
    cloudinaryImageId,
    cuisines,
    avgRating,
    sla,
    costForTwoMessage,
  } = resInformation;

  // const menuCardsList =
  //   resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
  // setMenuCard(menuCardsList)

  // console.log("menuCardsList",menuCardsList);
  // console.log(resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)
  const categoryList =
    resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
      (c) => {
        return (
          c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );  
      }
    );
  // console.log(categoryList);

  // setResInfo(resInformation);
  // const newlyLaunchedData=finalData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  // console.log(newlyLaunchedData)
  // setMenuCards(newlyLaunchedData)
  return (
    <div className="resPage mx-[250px]  ">
      <div className="relative resInformation mt-7 flex  justify-between bg-pink-100 rounded-lg">
        <img
          className="resPagelogo w-[250px] rounded-l-lg "
          src={CDN_URL + cloudinaryImageId}
          alt="res-logo"
        />
        <div className=" aboutRes pr-3 pb-2 ">
          <div className="absolute  left-1/3">
            <h2 className=" text-4xl   mt-3 ">{name}</h2>
          </div>
          <h4 className="mt-20 text-2xl">Restaurant-id:{id}</h4>
          <h4 className="mt-1 text-2xl">{areaName}</h4>
          <h4 className="mt-1 text-2xl">Avg: {costForTwoMessage}</h4>
          <h4 className="mt-1  text-2xl"> Ratings: {avgRating}</h4>
          <h4 className="mt-1 text-2xl">
            Avg Delivery: {sla.deliveryTime} mins
          </h4>
        </div>
      </div>
      {/* <div className="itemList-Container">
        {menuCardsList.map((item) => (
          <ItemCard key={item.card.info.id} details={item} />
        ))}
      </div> */}
      {categoryList.map((categories, i) => (
        <RestaurantCategory
          key={i}
          data={categories?.card?.card}
          fold={i == showIndex ? true : false}
          setShowIndex={() => setShowIndex(i)}
        />
      ))}
    </div>
  );
};

export default MenuCard;
