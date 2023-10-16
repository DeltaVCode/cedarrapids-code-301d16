/* eslint-disable react/prop-types */
import React from 'react';



class Pizza extends React.Component {


  render(){
    console.log('we got props?',this.props.crust);
    return (
      <>
      {/* name and description  */}
      <article>
      {/* add props to display different pizza names  */}
        <h3>{this.props.pizzaPie}</h3>
        <h3>{this.props.toppings}</h3>
        <h3>{this.props.crust}</h3>
        <p>Is this your favorite pizza?</p>
      </article>
      </>
    )
  }
}


export default Pizza;