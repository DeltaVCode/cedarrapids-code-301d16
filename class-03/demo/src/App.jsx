import React from "react";
import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer";
import MainBody from "./MainBody.jsx";
import Modal from "react-bootstrap/Modal";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //this is for our emoji hearts
      pizza: "",
      showModal: false,
      selectPizza: "",
    };
  }

  //handle emoji hearts
  addPizza = () => {
    this.setState({
      pizza: this.state.pizza + '🍕'
    })
  };

  handleOnHide = () => {
    this.setState({
      showModal: false
    })
  };

  handleOnShowModal = (pizzaPie) => {
    // pizzaPie is the pizza name 
    this.setState({
      showModal: true,
      selectPizza: pizzaPie
    })
  };

  render() {
    // console.log('pizzas?',this.state.pizza);
    console.log(this.state.showModal, this.state.selectPizza);
    return (
      <>
        <Header pizzas={this.state.pizza}/>
        <MainBody 
        addPizza={this.addPizza}
        //lets pass this function to MainBody and then to pizza so our title can invoke our arrow func in the parent class
        handleOnShowModal={this.handleOnShowModal}

        />
        <Footer />
        {/* <SelectedBeast showModal={this.state.showModal} handleOnHide={this.handleOnHide} 
          selectedBeast={this.state.selectBeast}
        />  */}


{/* this needs to go into a file called selected Beast  */}

        <Modal show={this.state.showModal} onHide={this.handleOnHide}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.selectPizza}</Modal.Title>
          </Modal.Header>
        </Modal>
      </>
    );
  }
}

export default App;
