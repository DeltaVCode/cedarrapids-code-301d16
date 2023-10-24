import React from 'react'
import './App.css'
import axios from 'axios'



// const REACT_APP_SERVER = import.meta.env.REACT_APP_SERVER;

// console.log('server',REACT_APP_SERVER);

class  App extends React.Component  {


constructor(props){
  super(props);
  this.state = {
    pizzaType: ""
  };
}
//helperfunction for form and submit
handleInput = (event) => {
  this.setState({
    pizzaType: event.target.value,
    pizzaData: null
  })
}

handleSubmit = async (event) => {
event.preventDefault();
 //need a url to the server
 //go to server / route ? some data that we are requesting from the server
 let url = `http://localhost:3001/pizza?pizzatype=${this.state.pizzaType}`;
 console.log(url);

 let pizzaResults = await axios.get(url);
  console.log(pizzaResults);
  //then update state. so we can show on the page. 
  this.setState({
    pizzaData : pizzaResults.data
  })
}





  render(){
    console.log(this.state.pizzaData);
    return (
      <>
       <h1>Find your Pizza</h1>
       <form onSubmit={this.handleSubmit}>
       <label>
        Search Pizza Type 
        <input  type="text" onChange={this.handleInput}/>
       </label>
       <button type="submit">Display Pizza</button>
       </form>
       {
        this.state.pizzaData &&

        <p>{this.state.pizzaData.location} is where you can get {this.state.pizzaData.pizzaType} pizza.</p>
       }
      </>
    )
  }
  
}

export default App
