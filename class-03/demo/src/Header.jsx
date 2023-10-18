import React from "react";

class Header extends React.Component {
  render() {
    console.log(this.props.pizzas);
    return (
      <>
        <h1>Welcome to Our Website!!!!{this.props.pizzas}</h1>
      </>
    );
  }
}

export default Header;
