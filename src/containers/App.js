import React, { Component } from "react";
import CardList from "../components/CardList";
//import { robots } from "../components/robots"; //non default, needs structure
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {
  //App owns the state
  constructor() {
    super(); //calls constructor of components
    this.state = {
      robots: [],
      searchfield: ""
    };
  }
  componentDidMount() {
    //faster method
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(
        users => this.setState({ robots: users }) //updated the state so render() run again
      ); //update the setstate with users that we getting from json()
  }
  onSearchChange = event => {
    //console.log(event.target.value); //value of the searched item
    this.setState({ searchfield: event.target.value }); //searchfield gets updated
    //console.log(filteredRobots);
  };
  render() {
    const { robots, searchfield } = this.state; //destructuring
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //coes the comparison
    });
    if (!robots.length) {
      ///is zero
      return <h1>Loading</h1>; ///if the site takes a lot of time
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          {/** accepts the changed values inthe search box */}
          <Scroll>
            {/**wraps component */}
            <CardList robots={filteredRobots} />{" "}
            {/*accpts robots array  --  now passed filtered robots*/}
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
