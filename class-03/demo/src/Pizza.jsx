import React from "react";
import {Card, Button, Col} from 'react-bootstrap';
import "./App.css";
import "./Pizza.css";

class Pizza extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      pizzaNeed: false,
    };
  }
  handleLikes = () => {
    console.log("handle the like");
    this.setState({
      likes: this.state.likes + 1,
    });
  };

  pizzaNeeded = () => {
    this.setState({
      pizzaNeed: true,
    });
  };

  pizzaGot = () => {
    this.setState({
      pizzaNeed: false,
    });
  };
  //add our helper function
  helperFunctionH3Click = () => {
    console.log('proof of life');
    console.log('right name?', this.props.pizzaPie);
    //now that we have the right card
    //we need a function to run to open the modal
    //this function is going to live parent class called Mainbody.
    //function name is handleOnShowModal
    this.props.handleOnShowModal(this.props.pizzaPie);
  }

  render() {
    // console.log(this.props.addPizza);
    return (
      <>
      <Col>
        <Card className="h-100 p-3">
          <Card.Body>
            <Card.Title onClick={this.helperFunctionH3Click}>{this.props.pizzaPie}</Card.Title>

            <Card.Img
              variant="top"
              src={this.props.imageURL}
              alt={this.props.pizzaPie}
              title={this.props.pizzaPie}
              onClick={this.props.addPizza}
            />

            <h3>{this.props.pizzaPie}</h3>
            <p>{this.state.likes} Likes</p>
            <p onClick={this.handleLikes}>Click to like this pizza!</p>

            <div>{this.state.pizzaNeed ? "I Got Pizza!" : "I need Pizza!"}</div>
            {/* add two buttons  */}
            <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
            <Button variant="success" onClick={this.pizzaGot}>
              I got Pizza!
            </Button>
          </Card.Body>
        </Card>

        </Col>
        {/* <article>
          <h3>{this.props.pizzaPie}</h3>
          <p>{this.state.likes} Likes</p>
          <p onClick={this.handleLikes}>Click to like this pizza!</p>
        </article>
        <img
          src={this.props.imageURL}
          alt={this.props.pizzaPie}
          title={this.props.pizzaPie}
        />
        <div>{this.state.pizzaNeed ? "I Got Pizza!" : "I need Pizza!"}</div>
        <Button onClick={this.pizzaNeeded}>I need Pizza!</Button>
        <Button variant="success" onClick={this.pizzaGot}>
          I got Pizza!
        </Button> */}
      </>
    );
  }
}

export default Pizza;
