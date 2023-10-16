import React from "react";
import Pizza from "./Pizza";
class Mainbody extends React.Component {
  render() {
    return (
      <>
        <main>
          {/* we need to give this component some data to display with the template Pizza  */}
          <Pizza pizzaPie="Detroit" toppings="Cheese" crust="Detroit Style" />
          <Pizza
            pizzaPie="New York Thin"
            toppings="Cheese"
            crust="Detroit Style"
          />
          <Pizza
            pizzaPie="Chicago Deep Dish"
            toppings="Cheese"
            crust="Detroit Style"
          />
          <Pizza
            pizzaPie="Oven Grinder"
            toppings="Cheese"
            crust="Detroit Style"
          />
          <Pizza
            pizzaPie="Brick Oven"
            toppings="Cheese"
            crust="Detroit Style"
          />
          <Pizza pizzaPie="Calzone" toppings="Cheese" crust="Detroit Style" />
        </main>
      </>
    );
  }
}

export default Mainbody;
