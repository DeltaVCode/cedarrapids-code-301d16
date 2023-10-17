import React from "react";
import Button from 'react-bootstrap/Button';
import './App.css';
import './Pizza.css'


class Pizza extends React.Component {
  //add a constructor function add state
  constructor(props) {
    super(props);
    this.state = {
      //can have several properties
      //tally our counting of likes
      likes: 0,
      pizzaNeed: false,
      //we can also assign default values to make state more readable
      //global variable would update only one value and not render correct state to the user.
    };
  }
  //we are going to add some arrow function to help us manage state.
  handleLikes = () => {
    console.log('handle the like');
    //lets update state
    this.setState({
      likes: this.state.likes + 1,
      //we want to update something else in state.
    });
  };


  pizzaNeeded = () => {
    console.log('proof of life');
    this.setState({
      pizzaNeed: true,
    })
  }


  pizzaGot = () => {
    this.setState({
      pizzaNeed: false,
    })
  }





  render() {
    // console.log("we got props?", this.props.crust);
    // console.log(this.state.likes);
    return (
      <>
        {/* name and description  */}
        <article>
          {/* add props to display different pizza names  */}
          <h3>{this.props.pizzaPie}</h3>
          <p>{this.state.likes} Likes</p>
          <p onClick={this.handleLikes}>Click to like this pizza!</p>
        </article>
         {/* so lets create an event handler 
            dont do normally this is made for react, not html.
        */}
        <img src={this.props.imageURL} alt={this.props.pizzaPie} title={this.props.pizzaPie}/>

         {/* conditional rendering for our button */}
         {/* message to appear if pizza is awesome */}
         {/* 
            Ternary Operator
            What? True : False 
            BooleanValue ? console.log('true') : console.log('false');
        */}
        <div>{this.state.pizzaNeed ? 'I Got Pizza!' : 'I need Pizza!'}</div>
        {/* add two buttons  */}
        <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
        <Button variant="success" onClick={this.pizzaGot}>I got Pizza!</Button>
      </>
    );
  }
}

export default Pizza;
