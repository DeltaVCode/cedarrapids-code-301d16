import React from "react";
import Pizza from "./Pizza";
import data from "./data.json";

class Mainbody extends React.Component {
  //work gets done here
  render() {
    //add here
    console.log(data);
    let pizzas = [];
    data.forEach((newPizza, index) => {
      pizzas.push(<Pizza   pizzaPie={newPizza.name} imageURL={newPizza.imageURL} key={index}/>)
    })

    return (
      <>
        <main>{pizzas}</main>
      </>
    );
  }
}

export default Mainbody;
