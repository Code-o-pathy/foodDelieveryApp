import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "User",
        location: "Location of user",
        id: "unknown",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Code-o-pathy");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    // console.log(json);
    // console.log(this.state.userInfo);

    // intervals like this need to be cleared in componentWillUnmount otherwise they keep runnign even when component is unmount ..
    // this.timer = setInterval(() => {
    //   console.log("intervale");
    // }, 1000);
  }

  componentDidUpdate(prevState, prevProps) {
    if (this.state.count !== prevState) {
      console.log("so it did update  ");
    }
  }
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("finally it went");
  }
  render() {
    // const { name, location } = this.props;
    const { name, location, avatar_url, bio, hireable, id } =
      this.state.userInfo;
    // const {count}=this.state;

    return (
      <div>
        <img className="github-image rounded-lg" src={avatar_url} />
        <h1>Name: {name}</h1>

        {/* <h1>Count: {count}</h1>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1
          })
        }}>Count increase</button> */}
        <h2>{bio}</h2>
        <h3>Locality: {location}</h3>
        {/* <h3>Hireable: {hireable}</h3> */}
      </div>
    );
  }
}

export default UserClass;
