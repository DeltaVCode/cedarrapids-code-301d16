import React from "react";
import Pizza from "./Pizza";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Mainbody extends React.Component {
  //work gets done here
  render() {
    //add here
    // console.log(data);
    let pizzas = [];
    data.forEach((newPizza, index) => {
      pizzas.push(
        <Pizza
          pizzaPie={newPizza.name}
          imageURL={newPizza.imageURL}
          addPizza={this.props.addPizza}
          key={index}
          handleOnShowModal={this.props.handleOnShowModal}
        />
      );
    });

    return (
      <>
        <main>
          <Container>
            <Row lg={4} md={3} sm={2} xs={1}>
            {pizzas}
            </Row>
          </Container>
        </main>
      </>
    );
  }
}

export default Mainbody;
