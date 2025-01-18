import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

//before this card got  renovated
// const ItemCard = ({ details }) => {
//   const { imageId, name, price } = details?.card?.info;
// console.log(details);
//   return (
//     <div className="border border-black  mt-3 flex justify-between items-center rounded-lg pl-2 bg-purple-50 h-[250px] overflow-hidden">
//        <h3 className="text-2xl">{name} --Rs {price / 100}</h3>
//       <img className="w-[250px]" src={CDN_URL + imageId} />
//     </div>
//   );
// };

const ItemCard = ({ data, add }) => {
  const dispatch = useDispatch();
  const handleAddButton = (item) => {
    dispatch(addItem(item));
  };
  // console.log(data);
  return (
    <div >
      {data.map((item) => (
        <div
          className="h-44 mt-6 pb-2 flex 
          justify-between  border border-blue-700 rounded-lg px-4 py-2"
          key={item.card.info.id}
          data-testid="foodItems"
        >
          <div >
            <div>
              {item.card.info.itemAttribute.vegClassifier === "NONVEG"
                ? "🟥"
                : "🟩"}
            </div>
            <div className=" mt-[4px] text-2xl">{item.card.info.name}</div>
            <div className=" mt-[4px] text-lg ">
              ₹ {}
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-xs mt-2">{item.card.info.description}</p>
          </div>

          <div className="w-[200px] relative ">
            <div className=" absolute left-1/2 -translate-x-1/2 bottom-1">
              {add && (
                <button
                  onClick={() => handleAddButton(item)}
                  className=" bg-white shadow-lg rounded text-green-600 px-4 py-2   "
                >
                  Add +
                </button>
              )}
            </div>
            <img
              className="w-full h-full  "
              alt={item.card.info.name + " image"}
              src={CDN_URL + item.card.info.imageId}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
