import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { FormGroup, ListGroupItem } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './App.css'

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class App extends React.Component {
  //constructor function
  constructor(props) {
    super(props);
    this.state = {
      //form take in a user name
      userName: "",
      //sort some data and store in state
      sortedData: data,
    };
  }

  //helper function

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("handling submit");
    // let firstName = event.target.firstName.value;
    // let lastName = event.target.lastName.value;
    // console.log("form: ", firstName, lastName);

    let userName = event.target.userName.value;
    this.setState({
      userName: userName
    })
    
  };

  handleInput = (event) => {
    // console.log(event.target.value);
    let userName = event.target.value;
    // console.log("🚀 ~ file: App.js:27 ~ App ~ userName:", userName);
    this.setState({
      userName: userName
    })

  };

  handleSelect = (event) => {
    // console.log("proof our select is firing!");
    //grab value from select in the form then if/else to tell even or odd or all.
    let selected = event.target.value;
    // console.log(selected);
    if(selected === 'even'){
      let newData = data.filter((number) => number % 2 === 0);
      //we need to update state to rerender just the even numbers
      this.setState({sortedData: newData});
    }else if(selected === 'odd'){
      let newData = data.filter((number) => number % 2 !== 0);
      //then we can update state
      this.setState({sortedData: newData});
    } else {
      //give back all the numbers
      this.setState({sortedData: data});
    }
  };

  //forms that go in the return

  render() {
    // console.log(' from state', this.state.userName);
    let numbers = this.state.sortedData.map((number, index) =>{
      return <ListGroupItem key={index} >{number}</ListGroupItem>
    });




    return (
      <>
        <header> Forms in React</header>

        <section>
          <ListGroup>{numbers}</ListGroup>
        </section>

        <Form onSubmit={this.handleSubmit}>
          <Form.Label>
            Name:
            <input type="text" name="userName" onInput={this.handleInput} />
          </Form.Label>

          <FormGroup controlId="firstName">
            <Form.Label>FirstName: </Form.Label>
            <Form.Control type="text" />
          </FormGroup>

          <Form.Label htmlFor="lastName">Last Name:</Form.Label>
          <Form.Control type="text" name="lastName" id="lastName" />

          <p>Selected Numbers</p>
          <Form.Select name="selected" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </Form.Select>
          <Button type="submit">Submit</Button>
        </Form>
      </>
    );
  }
}

export default App;

{
  /* <form onSubmit={this.handleSubmit}>
        <label>User name
        <input type="text" name="userName" onChange={this.handleInput} />
        </label>
        <fieldset>
          <legend>Select Numbers</legend>
          <select name="selected" onChange={this.handleSelect}>
            <option value="all">All</option>
            <option value="even">Even</option>
            <option value="odd">Odd</option>
          </select>
        </fieldset>
      <button type="submit">Submit</button>
</form> */
}
