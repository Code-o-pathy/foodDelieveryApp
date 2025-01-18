import React from "react";
import ItemCard from "./ItemCard";
import { useState } from "react";
const RestaurantCategory = ({ data, fold, setShowIndex }) => {
  const { title, itemCards } = data;
  const [close, setClose] = useState(false);
  // const [fold, setFold] = useState(false);
  const handleFold = () => {
    close == false ? setClose(true) : setClose(false);
    // fold == false ? setFold(true) : setFold(false);
    setShowIndex();
    // setFold(!fold);
    // console.log(fold);
  };
  //   console.log(data.itemCards);
  return (
    <>
      <div className="mt-3 cursor-pointer  shadow-lg border rounded-lg p-3">
        <div onClick={handleFold} className="flex justify-between">
          <div  className="font-bold text-lg">
            {title}({itemCards.length})
          </div>
          <div>{close == false ? "⬇️" : "⬆️"}</div>
        </div>

        <div>{fold && close  &&<ItemCard data={itemCards} add={true}/>}</div>
      </div>
    </>
  );
};

export default RestaurantCategory;

{
  /* <div>{title}</div> */
}
{
  /* <p>{itemCards[0].card.info.description}</p> */
}
