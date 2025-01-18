import Users from "./Users";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
export default AboutUs = () => {
  return (
      <div className=" flex justify-center shadow-lg w-[280px]  p-5 mx-auto  mt-[120px]  rounded-lg  border bg-purple-100 ">
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              console.log()
              // <h3>Account name: {loggedInUser}</h3>
            )}
          </UserContext.Consumer>
          <UserClass name={"Ankit"} location={"Mumbai"} />
          {/* <Users name={"Ankit (Function)"} /> */}
        </div>
      </div>
  );
};
