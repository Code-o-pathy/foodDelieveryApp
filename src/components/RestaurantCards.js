import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
// inline css is written in this way, not a good way but know it. ALso there are two ways one pass object via variable or pass directly

const styleCard = {
  backgroundColor: "yellow",
};
//pass css via variable
// const RestaurantCards = () => {
//   return (
//     <div className="res-card" style={styleCard}>
//       <h3>Eat Bharatiya</h3>
//     </div>
//   );
// };

//pass css without variable

// also u can either pass the object and access it or destructure it
const RestaurantCards = (props) => {
  // const {loggedInUser}=useContext(UserContext)
  //the below line is helpful because then u can access say "name" via resData.info.name or else u would have to access via props.resDate.info.name.
  const { resData } = props;
  const { cloudinaryImageId, cuisines, name, avgRating, sla,totalRatingsString} = resData?.info;

  // const RestaurantCards = ({ resName, cuisine, ratings, eD, img, altTag }) => {
  // if destructuring use the same names and if not use props.Var name
  return (
    //good practice of not writing resData.info again and again
    <div data-testid='resCardTests' className="res-card w-[225px] h-[350px] ml-[25px] mt-4 bg-purple-100 rounded-lg ">
      <img
        className="res-logo rounded-lg w-[273px] h-[182px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3 className="ml-1 py-4 text-xl  ">{name} </h3>
      <h3 className=" ml-1  line-clamp-1   break-words ">{cuisines.join(",")}</h3>
      <h3 className=" ml-1 ">{avgRating}</h3>
      <h5 className= " ml-1 ">{sla.deliveryTime} min</h5>
      {/* <h5>{loggedInUser}</h5> */}
    </div>

    //bad practice writing resData.info again and again
    // <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
    //   <img
    //     className="res-logo"
    //     src={
    //       "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    //       resData.info.cloudinaryImageId
    //     }
    //   />
    //   <h3>{resData.info.name} </h3>
    //   <h4>{resData.info.cuisines.join(",")}</h4>
    //   <h5>{resData.info.avgRating}</h5>
    //   <h5>{resData.info.sla.deliveryTime} min</h5>
    // </div>
  );
};

export const withRatedLabel=(RestaurantCards)=>{
  return(props)=>{
    return(
      <>

      <label className="absolute bg-lime-200 rounded-lg px-2 py-1 text-purple-900 ml-3 mt-4 border border-black" >Highly Rated</label>
      <RestaurantCards {...props}/>
      </>
    )
  }
}
export default RestaurantCards;
