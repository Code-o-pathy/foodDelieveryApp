import RestaurantCards, { withRatedLabel } from "./RestaurantCards";
// import resList from "../utils/mockData"; --used earlier now not needed
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const BodyComponent = () => {

  const { loggedInUser, SetUsername } = useContext(UserContext);

  const [resListNew, setResListNew] = useState([]);
  const [filteredResListNew, setFilteredResListNew] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantRated = withRatedLabel(RestaurantCards);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const proxyUrl = "";
    const apiUrl =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1646403&lng=72.8530249&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    // const apiUrl =
    //   "http://localhost:4000/resto";

    // Use localhost URL for local testing
    const data = await fetch(apiUrl);
    // const data = await fetch(proxyUrl + apiUrl, {
    //   method: "GET",
    //   headers: {
    //     Origin: "http://localhost:1234/ ", // Localhost URL for testing
    //     "X-Requested-With": "XMLHttpRequest",
    //   },
    // });

    // if (!data.ok) {
    //   throw new Error(`HTTP error aagaya bhaiyaa  ! status: ${data.status}`);
    // }

    // const contentType = data.headers.get("content-type");
    // if (!contentType || !contentType.includes("application/json")) {
    //   throw new Error("Received non-JSON response");
    // }
    console.log(data)
    const json = await data.json();
    const finalData =
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResListNew(finalData);
    setFilteredResListNew(finalData);
  };
  //conditional rendering

  //way 1
  // if (resListNew.length === 0) {
  //   return <Shimmer/>;
  // }
  

  // way 2 for conditional rendering using ternary operator
  return resListNew.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex justify-between  items-center">
        <div className="searchCon ml-4 px-2 flex items-center">
          <input
            type="text"
            data-testid="searchInput"
            className="searchBox border h-8 w-[350px] border-black rounded-l  bg-purple-100 px-2"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBTN h-8 mx-4 px-5 border border-black rounded-r bg-purple-100"
            onClick={() => {
              const newList = resListNew.filter((resData) => {
                return resData.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredResListNew(newList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <label className="bg-purple-100 rounded-l-lg h-80  p-1 px-2 border border-black  ">
            Username :{" "}
          </label>
          <input
            value={loggedInUser}
            onChange={(e) => {
              SetUsername(e.target.value);
            }}
            className="border border-black p-1 px-2 mx-2 bg-purple-100 rounded-r-lg w-36"
          />
        </div>
        <button
          className="filter-btn mx-5  py-1 px-5 border border-black rounded bg-purple-100 my-3"
          onClick={() => {
            // array = array.filter((resData) => {
            //   return resData.age > 23;
            let filteredList = filteredResListNew.filter((resData) => {
              return resData.info.avgRating > 4.5;
            });
            setFilteredResListNew(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container flex flex-wrap ">
        {/* new way */}

        {filteredResListNew.map((restaurant) => (
          <Link
            to={"/restaurant-menu/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {restaurant.info.totalRatingsString === "10K+" ||
            restaurant.info.totalRatingsString === "50K+" ||
            restaurant.info.totalRatingsString === "100K+" ? (
              <RestaurantRated resData={restaurant} />
            ) : (
              <RestaurantCards resData={restaurant} />
            )}
            {/* <RestaurantPromoted resData={restaurant}/> */}
          </Link>
        ))}
        {
          //better way but the above one is best
          /* <RestaurantCards resData={resList[1]} />
          <RestaurantCards resData={resList[2]} />
          <RestaurantCards resData={resList[3]} />
          <RestaurantCards resData={resList[4]} />
          <RestaurantCards resData={resList[5]} />
          <RestaurantCards resData={resList[6]} />
          <RestaurantCards resData={resList[7]} />
          <RestaurantCards resData={resList[8]} />
          <RestaurantCards resData={resList[9]} />
          <RestaurantCards resData={resList[10]} />
          <RestaurantCards resData={resList[11]} />
          <RestaurantCards resData={resList[12]} />
          <RestaurantCards resData={resList[13]} />
          <RestaurantCards resData={resList[14]} />
          <RestaurantCards resData={resList[15]} />
          <RestaurantCards resData={resList[16]} />
          <RestaurantCards resData={resList[17]} />
          <RestaurantCards resData={resList[18]} />
          <RestaurantCards resData={resList[19]} /> */
        }

        {/* old way */}
        {/* <RestaurantCards
            // resName="Chhotu da Dhaba"
            // cuisine="South Indian, Punjabi"
            // ratings="4.5"
            // eD="30 min"
            // img="https://marketplace.canva.com/EAF1XAgJrCg/1/0/1600w/canva-white-brown-simple-restaurant-logo-koIA1HEug0Q.jpg"
            // altTag="logoForChhotuDaDhaba"
          />
          <RestaurantCards
            resDate={resObj}
            // resName="Chat stall"
            // cuisine="Chat Bhandar, Snacks"
            // ratings="5"  
            // eD="10 min"
            // img="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
            // altTag="logoForSavitaKiChat"
          /> */}
      </div>
    </div>
  );
};

export default BodyComponent;
